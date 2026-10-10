import type { LevelId } from './levels.ts';
import type { SourceId } from './sources.ts';

/**
 * Systems a component can belong to. These drive the visibility toggles and
 * the colour a piece is tinted, so they are coarse on purpose: a viewer should
 * be able to hide "everything to do with power" in one click.
 */
export const categories = [
  'Chassis',
  'Cooling',
  'Board',
  'Power',
  'Memory',
  'Storage',
  'Compute',
  'Graphics',
] as const;
export type Category = (typeof categories)[number];

export const colors: Record<Category, string> = {
  Chassis: '#a39a91',
  Cooling: '#9caebd',
  Board: '#8faaa0',
  Power: '#dca369',
  Memory: '#64adbf',
  Storage: '#6cbfa4',
  Compute: '#709fcb',
  Graphics: '#b497cf',
};

export interface Concept {
  id: string;
  name: string;
  shortName: string;
  category: Category;
  parent: string | null;
  children: string[];
  description: string;
  purpose: string;
  quantity: string;
  specifications: Record<string, string>;
  representationType: 'physical' | 'logical';
  physicalAccuracy: string;
  sources: SourceId[];
  searchTerms: string[];
  /** The scale this concept is rendered at. */
  level: LevelId;
  /** Set when selecting this component can descend into a scale of its own. */
  open?: LevelId;
  /**
   * An outer cover that has to come off before anything behind it can move:
   * a glass or mesh panel, the lid, a dust filter. These leave at the start of
   * the disassembly, ahead of everything else, because a fan that sets off
   * forward while the panel in front of it is still shut goes through the
   * panel.
   */
  opensFirst?: boolean;
}

export const physical =
  'Εκπαιδευτική τρισδιάστατη απεικόνιση. Το σχήμα και η θέση των μερών είναι προσεγγιστικά και δεν αποτελούν σχέδιο επισκευής.';
export const logical =
  'Τεκμηριωμένη λογική αρχιτεκτονική. Οι θέσεις των εσωτερικών μονάδων είναι εκπαιδευτικές και όχι ακριβές σχέδιο κατασκευής.';
export const standard =
  'Το μοντέλο ακολουθεί δημοσιευμένες διαστάσεις και πρότυπα. Η διάταξη είναι αντιπροσωπευτική της κατηγορίας και όχι συγκεκριμένου εμπορικού προϊόντος.';

export type Entry = Omit<
  Concept,
  'children' | 'physicalAccuracy' | 'sources' | 'shortName' | 'searchTerms'
> &
  Partial<
    Pick<
      Concept,
      'children' | 'physicalAccuracy' | 'sources' | 'shortName' | 'searchTerms'
    >
  >;

const greekEducational: Record<string, Partial<Pick<Concept, 'name' | 'shortName' | 'description' | 'purpose' | 'quantity'>>> = {
  pc: { name: 'Επιτραπέζιος υπολογιστής', shortName: 'Υπολογιστής', description: 'Ένα ολοκληρωμένο σύστημα όπου όλα τα εξαρτήματα συνεργάζονται για να εκτελούν προγράμματα, να αποθηκεύουν δεδομένα και να παράγουν εικόνα.', purpose: 'Συνδυάζει επεξεργασία, μνήμη, αποθήκευση, γραφικά, τροφοδοσία και ψύξη σε ένα ενιαίο σύστημα.', quantity: '1 εκπαιδευτικός υπολογιστής' },
  chassis: { name: 'Πλαίσιο κουτιού', shortName: 'Κουτί', description: 'Ο μεταλλικός σκελετός που συγκρατεί και προστατεύει τα εξαρτήματα του υπολογιστή.', purpose: 'Κρατά τα εξαρτήματα στις σωστές θέσεις και βοηθά στη σωστή ροή του αέρα.', quantity: '1 πλαίσιο' },
  motherboard: { name: 'Μητρική πλακέτα', shortName: 'Μητρική', description: 'Η μεγάλη κεντρική πλακέτα πάνω στην οποία συνδέονται ο επεξεργαστής, η RAM, οι κάρτες επέκτασης και οι μονάδες αποθήκευσης.', purpose: 'Επιτρέπει στα εξαρτήματα να επικοινωνούν μεταξύ τους και μεταφέρει ηλεκτρική ισχύ και δεδομένα.', quantity: '1 μητρική ATX' },
  cpu: { name: 'Κεντρική μονάδα επεξεργασίας (CPU)', shortName: 'Επεξεργαστής', description: 'Ο βασικός επεξεργαστής του υπολογιστή. Εκτελεί τις εντολές των προγραμμάτων και κάνει υπολογισμούς με πολύ μεγάλη ταχύτητα.', purpose: 'Εκτελεί το λειτουργικό σύστημα και τα προγράμματα και συντονίζει μεγάλο μέρος της λειτουργίας του υπολογιστή.', quantity: '1 επεξεργαστής' },
  ram: { name: 'Μνήμη RAM DDR5', shortName: 'RAM', description: 'Γρήγορη προσωρινή μνήμη που κρατά τα προγράμματα και τα δεδομένα που χρησιμοποιεί ο επεξεργαστής αυτή τη στιγμή.', purpose: 'Δίνει στον επεξεργαστή γρήγορη πρόσβαση στα ενεργά δεδομένα. Το περιεχόμενό της χάνεται όταν κλείσει ο υπολογιστής.', quantity: '2 μονάδες RAM' },
  graphicscard: { name: 'Κάρτα γραφικών (GPU)', shortName: 'Κάρτα γραφικών', description: 'Ισχυρή κάρτα επέκτασης που ειδικεύεται στην επεξεργασία γραφικών και σε πολλούς παράλληλους υπολογισμούς.', purpose: 'Δημιουργεί την εικόνα που εμφανίζεται στην οθόνη και επιταχύνει 3D γραφικά, βίντεο και άλλες απαιτητικές εργασίες.', quantity: '1 κάρτα γραφικών' },
  psu: { name: 'Τροφοδοτικό (PSU)', shortName: 'Τροφοδοτικό', description: 'Η μονάδα που μετατρέπει το ρεύμα της πρίζας στις χαμηλότερες τάσεις που χρειάζονται τα εξαρτήματα του υπολογιστή.', purpose: 'Τροφοδοτεί με ασφαλή και σταθερή ηλεκτρική ενέργεια τη μητρική, τον επεξεργαστή, την GPU, τους δίσκους και τους ανεμιστήρες.', quantity: '1 τροφοδοτικό ATX' },
  ssd: { name: 'Δίσκος SSD SATA 2,5 ιντσών', shortName: 'SSD SATA', description: 'Μονάδα μόνιμης αποθήκευσης χωρίς κινούμενα μηχανικά μέρη. Διατηρεί τα αρχεία ακόμη και όταν ο υπολογιστής είναι κλειστός.', purpose: 'Αποθηκεύει το λειτουργικό σύστημα, εφαρμογές, έγγραφα, φωτογραφίες και άλλα αρχεία.', quantity: '1 μονάδα SSD' },
  nvme: { name: 'Μονάδα SSD NVMe', shortName: 'SSD NVMe', description: 'Μικρή και πολύ γρήγορη μονάδα μόνιμης αποθήκευσης που συνδέεται απευθείας στη μητρική.', purpose: 'Αποθηκεύει μόνιμα δεδομένα και χρησιμοποιεί PCI Express για πολύ υψηλές ταχύτητες μεταφοράς.', quantity: '1 μονάδα NVMe' },
  cpucooler: { name: 'Ψύκτρα επεξεργαστή', shortName: 'Ψύκτρα CPU', description: 'Μεταλλική ψύκτρα με ανεμιστήρα που βρίσκεται πάνω από τον επεξεργαστή.', purpose: 'Μεταφέρει τη θερμότητα μακριά από τον CPU ώστε να λειτουργεί σε ασφαλή θερμοκρασία.', quantity: '1 ψύκτρα CPU' },
  casefan: { name: 'Ανεμιστήρες κουτιού', shortName: 'Ανεμιστήρας', description: 'Ανεμιστήρες που βάζουν δροσερό αέρα στο κουτί και απομακρύνουν τον ζεστό.', purpose: 'Δημιουργούν συνεχή ροή αέρα ώστε να ψύχονται όλα τα εξαρτήματα.', quantity: '4 ανεμιστήρες' },
  dimmslot: { name: 'Υποδοχές μνήμης RAM', shortName: 'Υποδοχή RAM', description: 'Οι ειδικές υποδοχές της μητρικής όπου τοποθετούνται οι μονάδες μνήμης RAM.', purpose: 'Συνδέουν ηλεκτρικά τη RAM με τον ελεγκτή μνήμης του επεξεργαστή.', quantity: '4 υποδοχές DDR5' },
  socket: { name: 'Υποδοχή επεξεργαστή', shortName: 'Socket CPU', description: 'Η ειδική θέση της μητρικής στην οποία τοποθετείται και ασφαλίζει ο επεξεργαστής.', purpose: 'Δημιουργεί τις ηλεκτρικές επαφές ανάμεσα στον επεξεργαστή και τη μητρική χωρίς συγκόλληση.', quantity: '1 υποδοχή CPU' },
};

export function concept(c: Entry): Concept {
  const gr = greekEducational[c.id] ?? {};
  return {
    ...c,
    ...gr,
    children: c.children ?? [],
    shortName: gr.shortName ?? c.shortName ?? gr.name ?? c.name,
    physicalAccuracy:
      c.physicalAccuracy ??
      (c.representationType === 'physical' ? physical : logical),
    sources: c.sources ?? [
      c.representationType === 'physical' ? 'specs' : 'whitepaper',
    ],
    searchTerms: c.searchTerms ?? [],
  };
}
