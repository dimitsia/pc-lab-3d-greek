export const greekTerms: Record<string,string> = {
  'Motherboard':'Μητρική πλακέτα','Mainboard':'Μητρική πλακέτα','Processor':'Επεξεργαστής','CPU':'CPU — Επεξεργαστής',
  'Memory':'Μνήμη RAM','Memory module':'Μονάδα μνήμης RAM','Graphics card':'Κάρτα γραφικών','GPU':'GPU — Κάρτα γραφικών',
  'Power supply':'Τροφοδοτικό','Storage':'Αποθήκευση','Cooling':'Ψύξη','Chassis':'Κουτί υπολογιστή','Case':'Κουτί υπολογιστή',
  'Fan':'Ανεμιστήρας','CPU cooler':'Ψύκτρα επεξεργαστή','SSD':'SSD — Μονάδα αποθήκευσης','NVMe SSD':'NVMe SSD — Μονάδα αποθήκευσης',
  'Socket':'Υποδοχή επεξεργαστή','DIMM slot':'Υποδοχή μνήμης RAM','PCIe slot':'Υποδοχή PCIe','Airflow':'Ροή αέρα',
  'Overview':'Επισκόπηση','Details':'Λεπτομέρειες','Specifications':'Χαρακτηριστικά','Architecture':'Αρχιτεκτονική','Components':'Εξαρτήματα',
  'Compare':'Σύγκριση','Search':'Αναζήτηση','Reset':'Επαναφορά','Close':'Κλείσιμο','Show':'Εμφάνιση','Hide':'Απόκρυψη',
  'Width':'Πλάτος','Height':'Ύψος','Length':'Μήκος','Capacity':'Χωρητικότητα','Speed':'Ταχύτητα','Power':'Ισχύς','Voltage':'Τάση',
  'Generation':'Γενιά','Interface':'Διασύνδεση','Type':'Τύπος','Model':'Μοντέλο','Manufacturer':'Κατασκευαστής','Cores':'Πυρήνες','Threads':'Νήματα',
  'Clock speed':'Συχνότητα λειτουργίας','Memory size':'Μέγεθος μνήμης','Form factor':'Μορφή / πρότυπο μεγέθους','Connector':'Σύνδεση'
};
export function elTerm(value:string){return greekTerms[value] ?? value;}
