'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { categories, colors, manifest, type Category } from '@/lib/manifest';
import { hardwareNameEl } from '@/lib/greek-display';

const categoryLabels: Record<Category, string> = { Chassis: 'Κουτί', Cooling: 'Ψύξη', Board: 'Μητρική', Power: 'Τροφοδοσία', Memory: 'Μνήμη', Storage: 'Αποθήκευση', Compute: 'Επεξεργασία', Graphics: 'Γραφικά' };

type Props = {
  visible: Category[];
  hidden: string[];
  onToggleCategory: (category: Category) => void;
  onToggleAll: () => void;
  onSetConceptVisible: (
    id: string,
    category: Category,
    visible: boolean,
  ) => void;
  onSelectConcept: (id: string) => void;
};

export default function SystemsList({
  visible,
  hidden,
  onToggleCategory,
  onToggleAll,
  onSetConceptVisible,
  onSelectConcept,
}: Props) {
  // Which system is unfolded to show its parts. Nothing outside this list
  // cares, so it stays here rather than in the explorer's own state.
  const [expanded, setExpanded] = useState<Category | null>(null);
  return (
    <div className="systems-section">
      <div className="section-heading">
        ΟΡΑΤΑ ΣΥΣΤΗΜΑΤΑ{' '}
        <button onClick={onToggleAll}>
          {visible.length === categories.length ? 'Απόκρυψη όλων' : 'Εμφάνιση όλων'}
        </button>
      </div>
      <div className="layer-scroll">
        {categories.map((category) => (
          <div key={category}>
            <div className="layer-row">
              <button
                className="category-visibility"
                aria-pressed={visible.includes(category)}
                aria-label={
                  (visible.includes(category) ? 'Απόκρυψη ' : 'Εμφάνιση ') + categoryLabels[category]
                }
                onClick={() => onToggleCategory(category)}
              >
                <i style={{ background: colors[category] }} />
                <span>{categoryLabels[category]}</span>
                <small>{visible.includes(category) ? 'Ναι' : 'Όχι'}</small>
              </button>
              <button
                className="category-expand"
                onClick={() =>
                  setExpanded(expanded === category ? null : category)
                }
                aria-expanded={expanded === category}
                aria-label={
                  (expanded === category ? 'Απόκρυψη ' : 'Εμφάνιση ') +
                  'εξαρτημάτων: ' + categoryLabels[category]
                }
              >
                <ChevronDown size={12} />
              </button>
            </div>
            {expanded === category && (
              <div className="sublayers">
                {manifest
                  .filter((c) => c.category === category && c.id !== 'card')
                  .map((c) => (
                    <div key={c.id}>
                      <button onClick={() => onSelectConcept(c.id)}>
                        {hardwareNameEl(c.shortName)}
                      </button>
                      <Switch
                        size="sm"
                        checked={
                          visible.includes(category) && !hidden.includes(c.id)
                        }
                        onCheckedChange={(checked) =>
                          onSetConceptVisible(c.id, category, checked)
                        }
                        aria-label={
                          (visible.includes(category) && !hidden.includes(c.id)
                            ? 'Απόκρυψη '
                            : 'Εμφάνιση ') + hardwareNameEl(c.name)
                        }
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
