'use client';
import { ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from '@/components/ui/command';
import { byId, colors, searchConcepts } from '@/lib/manifest';
import { levels } from '@/lib/levels';
import { hardwareNameEl, levelNameEl, categoryEl } from '@/lib/greek-display';

/** What the palette offers before anything has been typed. */
const suggested = [
  'package',
  'gddr7',
  'gpc',
  'sm',
  'tensor',
  'rt',
  'l2',
  'vrm',
];

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  query: string;
  onQueryChange: (query: string) => void;
  onSelect: (id: string) => void;
};

export default function SearchDialog({
  open,
  onOpenChange,
  query,
  onQueryChange,
  onSelect,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogContent className="search-dialog">
        <DialogTitle>Βρες ένα εξάρτημα</DialogTitle>
        <DialogDescription>
          Μετάβαση σε οποιοδήποτε εξάρτημα ή στοιχείο αρχιτεκτονικής.
        </DialogDescription>
        <Command shouldFilter={false}>
          <CommandInput
            value={query}
            onValueChange={onQueryChange}
            placeholder="Δοκίμασε RAM, GPU, GDDR7, L2…"
          />
          <CommandList>
            <CommandEmpty>
              Δεν βρέθηκαν εξαρτήματα. Δοκίμασε «μνήμη», «GPU», «επεξεργαστής» ή «SSD».
            </CommandEmpty>
            <CommandGroup
              heading={query ? 'Αποτελέσματα' : 'Εξερεύνησε τον υπολογιστή'}
            >
              {(query
                ? searchConcepts(query)
                : suggested.map((id) => byId[id])
              ).map((c) => (
                <CommandItem
                  key={c.id}
                  value={c.id}
                  onSelect={() => onSelect(c.id)}
                >
                  <i style={{ background: colors[c.category] }} />
                  <div>
                    {hardwareNameEl(c.name)}
                    <small>
                      <span>{levelNameEl(c.level)}</span>
                      {categoryEl[c.category]} ·{' '}
                      {c.representationType === 'logical'
                        ? 'Λογική αρχιτεκτονική'
                        : 'Φυσικό εξάρτημα'}
                    </small>
                  </div>
                  <ArrowUpRight size={15} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="search-hint">
          ↑ ↓ για πλοήγηση <span>Πάτησε Enter για προβολή</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
