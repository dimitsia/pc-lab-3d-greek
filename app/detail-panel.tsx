'use client';
import {
  ArrowUpRight,
  ChevronRight,
  EyeOff,
  Focus,
  Maximize,
  X,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { byId, colors, openLevel, sources, type Concept } from '@/lib/manifest';
import type { Selection } from '@/lib/explorer-state';
import { levels, type LevelId } from '@/lib/levels';
import { hardwareNameEl, descriptionEl, purposeEl, quantityEl, accuracyEl, specKeyEl, specValueEl, levelNameEl, locationEl, cooperatesEl, funFactEl } from '@/lib/greek-display';

const specLabels: Record<string, string> = { 'Form factor':'Μορφή', Expansion:'Επέκταση', Memory:'Μνήμη', Installed:'Σύνδεση', Specimen:'Μοντέλο αναφοράς', Standard:'Πρότυπο', Rails:'Γραμμές τάσης', 'GPU connector':'Σύνδεση GPU', Package:'Συσκευασία', Lid:'Μεταλλικό κάλυμμα', Contacts:'Επαφές', Channels:'Κανάλια', Capacity:'Χωρητικότητα', Dimensions:'Διαστάσεις', Protocol:'Πρωτόκολλο', Interface:'Διεπαφή', Format:'Μορφή', Type:'Τύπος', Layout:'Διάταξη', Voltage:'Τάση', Timings:'Χρονισμοί', Burst:'Ριπή δεδομένων' };

const categoryLabels: Record<string, string> = { Chassis: 'Κουτί', Cooling: 'Ψύξη', Board: 'Μητρική', Power: 'Τροφοδοσία', Memory: 'Μνήμη', Storage: 'Αποθήκευση', Compute: 'Επεξεργασία', Graphics: 'Γραφικά' };

type Props = {
  selected: Concept | null;
  selection: Selection | null;
  level: LevelId;
  isolated: boolean;
  onΚλείσιμο: () => void;
  onSelectConcept: (id: string) => void;
  onDive: (id: string) => void;
  onIsolate: () => void;
  onFocus: () => void;
  onHide: (id: string) => void;
};

export default function DetailPanel({
  selected,
  selection,
  level,
  isolated,
  onΚλείσιμο,
  onSelectConcept,
  onDive,
  onIsolate,
  onFocus,
  onHide,
}: Props) {
  const opens = selected && openLevel(selected.id);
  return (
    <Sheet
      open={!!selected}
      modal={false}
      onOpenChange={(open, details) => {
        if (!open && details.reason !== 'outside-press') onΚλείσιμο();
      }}
    >
      <SheetContent
        className="detail-panel"
        side="right"
        showΚλείσιμοButton={false}
        initialFocus={false}
      >
        {selected && (
          <>
            <div className="detail-top">
              <span style={{ color: colors[selected.category] }}>
                {categoryLabels[selected.category] ?? selected.category} /{' '}
                {selected.representationType === 'logical'
                  ? 'ΑΡΧΙΤΕΚΤΟΝΙΚΗ'
                  : 'ΥΛΙΚΟ'}
              </span>
              <button aria-label="Κλείσιμο πληροφοριών εξαρτήματος" onClick={onΚλείσιμο}>
                <X size={17} />
              </button>
            </div>
            <SheetTitle>{hardwareNameEl(selected.name)}</SheetTitle>
            <div className="instance-label">
              {selection?.instance !== undefined
                ? 'ΣΤΟΙΧΕΙΟ ' + String(selection.instance + 1).padStart(2, '0')
                : 'ΟΜΑΔΑ ΕΞΑΡΤΗΜΑΤΩΝ'}
            </div>
            <div className="purpose"><h3>Τι είναι;</h3><SheetDescription>{descriptionEl(selected)}</SheetDescription></div>
            <div className="purpose">
              <h3>Τι κάνει;</h3>
              <p>{purposeEl(selected)}</p>
            </div>
            <div className="purpose"><h3>Πού βρίσκεται;</h3><p>{locationEl(selected)}</p></div>
            <div className="purpose"><h3>Με τι συνεργάζεται;</h3><p>{cooperatesEl(selected)}</p></div>
            <div className="purpose"><h3>💡 Το ήξερες;</h3><p>{funFactEl(selected)}</p></div>
            <details className="student-tech-details">
              <summary>Περισσότερες τεχνικές πληροφορίες</summary>
              <div className="quantity">{quantityEl(selected.quantity)}</div>
            <dl>
              {Object.entries(selected.specifications).map(([k, v]) => (
                <div key={k}>
                  <dt>{specKeyEl(k)}</dt>
                  <dd>{specValueEl(v)}</dd>
                </div>
              ))}
            </dl>
            </details>
            {selected.parent && (
              <div className="parent-link">
                Μέρος του{' '}
                <button onClick={() => onSelectConcept(selected.parent!)}>
                  {hardwareNameEl(byId[selected.parent].shortName)}
                  <ChevronRight size={12} />
                </button>
              </div>
            )}
            {opens && opens !== level && (
              <button
                className="open-component"
                onClick={() => onDive(selected.id)}
              >
                Άνοιξε / αποσυναρμολόγησε {levelNameEl(opens)}
                <ChevronRight size={17} />
              </button>
            )}
            <div className="detail-actions">
              <button onClick={onIsolate}>
                <Focus size={14} />
                {isolated ? 'Εμφάνιση περιβάλλοντος' : 'Απομόνωση'}
              </button>
              <button onClick={onFocus}>
                <Maximize size={14} />
                Εστίαση
              </button>
              <button onClick={() => onHide(selected.id)}>
                <EyeOff size={14} />
                Απόκρυψη
              </button>
            </div>
            <p className="accuracy">{accuracyEl()}</p>
            {selected.sources.length > 0 && (
              <div className="source-links">
                <h3>Πηγές και περισσότερες πληροφορίες</h3>
                <p>
                  Τα τεχνικά έγγραφα και τα πρότυπα τεκμηριώνουν αυτή την οικογένεια εξαρτημάτων. Η γεωμετρία είναι εκπαιδευτική απεικόνιση και όχι σχέδιο συγκεκριμένου προϊόντος.
                </p>
                {selected.sources.map((s) => (
                  <a
                    key={s}
                    href={sources[s].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {sources[s].name}
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
