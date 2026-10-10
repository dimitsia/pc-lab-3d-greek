import type { Concept, Category } from './concept';
import type { LevelId } from './levels';

export const categoryEl: Record<Category,string> = {
  Chassis:'Κουτί', Cooling:'Ψύξη', Board:'Μητρική πλακέτα', Power:'Τροφοδοσία',
  Memory:'Μνήμη', Storage:'Αποθήκευση', Compute:'Επεξεργασία', Graphics:'Γραφικά'
};

const levelNames: Record<LevelId,string> = {
 pc:'Επιτραπέζιος υπολογιστής', motherboard:'Μητρική πλακέτα', dimm:'Μνήμη DDR5 · FURY Beast',
 dram:'Τσιπ DRAM', banks:'Πυρήνας DRAM', bank:'Τράπεζα μνήμης', cell:'Κελιά μνήμης',
 ddr4:'Μνήμη DDR4 · FURY Beast', ddr4dram:'Τσιπ DDR4 DRAM', ddr4banks:'Πυρήνας DDR4 DRAM',
 ddr4array:'Διάταξη μνήμης DDR4', ddr4cell:'Κελιά DDR4', ryzen:'Επεξεργαστής AMD Ryzen',
 ryzenio:'Εσωτερική αρχιτεκτονική Ryzen', corei9:'Επεξεργαστής Intel Core i9', coreio:'Εσωτερική αρχιτεκτονική Intel Core',
 psu:'Τροφοδοτικό', psubronze:'Τροφοδοτικό 80 PLUS Bronze', fan:'Ανεμιστήρας', cooler:'Αερόψυξη επεξεργαστή',
 liquid:'Υδρόψυξη', ssd:'Δίσκος SSD SATA', nvme:'Δίσκος SSD NVMe', card:'Κάρτα γραφικών RTX 5090',
 die:'Πυρήνας GPU', gpc:'Σύμπλεγμα επεξεργασίας γραφικών', tpc:'Σύμπλεγμα επεξεργασίας υφών', sm:'Πολυεπεξεργαστής ροής',
 rx9070:'Κάρτα γραφικών Radeon RX 9070', navi48:'Πυρήνας Navi 48', rxse:'Μηχανή shader', rxwgp:'Ομάδα επεξεργαστών εργασίας', rxcu:'Μονάδα υπολογισμού',
 arcb580:'Κάρτα γραφικών Intel Arc B580', bmg:'Πυρήνας BMG-G21', xeslice:'Τμήμα Xe2', xecore:'Πυρήνας Xe', xve:'Διανυσματική μηχανή Xe'
};
export const levelNameEl=(id:LevelId)=>levelNames[id];
export const levelTitleEl=(id:LevelId)=> id==='pc'?'Ο πλήρης υπολογιστής.':`Εξερεύνηση: ${levelNames[id]}.`;
export const levelSummaryEl=(id:LevelId)=>({
 pc:'Κουτί, μητρική, τροφοδοσία, αποθήκευση και ψύξη', motherboard:'Υποδοχές, θύρες, chipset και συνδέσεις',
 dimm:'Μονάδα μνήμης DDR5 και τα εσωτερικά της μέρη', dram:'Το εσωτερικό ενός τσιπ μνήμης DRAM', banks:'Οργάνωση τραπεζών μνήμης μέσα στο DRAM', bank:'Υποδιαιρέσεις και γραμμές μιας τράπεζας μνήμης', cell:'Τα μικροσκοπικά κελιά που αποθηκεύουν bit',
 ddr4:'Προηγούμενη γενιά μνήμης DDR4 για σύγκριση', ddr4dram:'Το εσωτερικό ενός τσιπ DDR4', ddr4banks:'Οργάνωση τραπεζών DDR4', ddr4array:'Διάταξη κελιών DDR4', ddr4cell:'Κελί μνήμης DDR4',
 ryzen:'Επεξεργαστής AMD και τα εσωτερικά του τμήματα', ryzenio:'Λογική οργάνωση του επεξεργαστή AMD', corei9:'Επεξεργαστής Intel και τα εσωτερικά του τμήματα', coreio:'Λογική οργάνωση του επεξεργαστή Intel',
 psu:'Μετατρέπει το ρεύμα και τροφοδοτεί τα εξαρτήματα', psubronze:'Εναλλακτικό μοντέλο τροφοδοτικού για σύγκριση', fan:'Ανεμιστήρας και κινητήρας ψύξης', cooler:'Ψύκτρα και ανεμιστήρας επεξεργαστή', liquid:'Κύκλωμα υδρόψυξης επεξεργαστή',
 ssd:'Μόνιμη αποθήκευση δεδομένων μέσω SATA', nvme:'Γρήγορη αποθήκευση δεδομένων μέσω PCIe/NVMe',
 card:'Κάρτα γραφικών και σύστημα ψύξης', die:'Ο επεξεργαστικός πυρήνας της GPU', gpc:'Μεγάλη ομάδα μονάδων επεξεργασίας γραφικών', tpc:'Μονάδες επεξεργασίας υφών και shader', sm:'Βασική υπολογιστική μονάδα της GPU',
 rx9070:'Κάρτα γραφικών AMD και σύστημα ψύξης', navi48:'Ο επεξεργαστικός πυρήνας της Radeon', rxse:'Οργάνωση μονάδων shader', rxwgp:'Ομάδα μονάδων υπολογισμού', rxcu:'Μονάδα παράλληλων υπολογισμών',
 arcb580:'Κάρτα γραφικών Intel και σύστημα ψύξης', bmg:'Ο επεξεργαστικός πυρήνας της Intel Arc', xeslice:'Ομάδα μονάδων γραφικών Xe2', xecore:'Βασικός πυρήνας επεξεργασίας Xe', xve:'Διανυσματική μονάδα επεξεργασίας'
} as Record<LevelId,string>)[id];

const exact: Record<string,string> = {
 'Motherboard':'Μητρική πλακέτα','Power supply':'Τροφοδοτικό','Memory':'Μνήμη','Storage':'Αποθήκευση','Cooling':'Ψύξη','Chassis':'Κουτί','Graphics':'Γραφικά','Compute':'Επεξεργασία','Board':'Μητρική πλακέτα',
 'Axial fans':'Αξονικοί ανεμιστήρες','Brushless fan motors':'Κινητήρες ανεμιστήρων χωρίς ψήκτρες','Fin stacks':'Συστοιχίες πτερυγίων','Heat pipes':'Θερμοσωλήνες','Copper cold plate':'Χάλκινη πλάκα επαφής','Flow-through backplate':'Πίσω πλάκα ελεύθερης ροής','Display mounting bracket':'Βάση θυρών εικόνας','Assembly fasteners':'Βίδες συναρμολόγησης','Thermal pads':'Θερμικά επιθέματα','GPU thermal interface':'Θερμική διεπαφή GPU','GPU retention bracket':'Βάση συγκράτησης GPU','Mounting standoffs':'Αποστάτες στερέωσης',
 'Fan':'Ανεμιστήρας','Fan motor':'Κινητήρας ανεμιστήρα','Heatsink':'Ψύκτρα','Heat pipe':'Θερμοσωλήνας','Cold plate':'Πλάκα επαφής','Backplate':'Πίσω πλάκα','Fastener':'Βίδα στερέωσης','Thermal pad':'Θερμικό επίθεμα','Retention':'Συγκράτηση','Standoff':'Αποστάτης',
 'Case':'Κουτί','Processor':'Επεξεργαστής','CPU':'Επεξεργαστής (CPU)','RAM':'Μνήμη RAM','Graphics card':'Κάρτα γραφικών','SSD':'Δίσκος SSD','NVMe SSD':'Δίσκος NVMe SSD','SATA SSD':'Δίσκος SATA SSD','Chipset':'Chipset','Socket':'Υποδοχή επεξεργαστή','VRM':'Κύκλωμα τροφοδοσίας VRM','PCB':'Πλακέτα PCB','Connector':'Σύνδεσμος','Connectors':'Σύνδεσμοι','Ports':'Θύρες','Port':'Θύρα','Cable':'Καλώδιο','Cables':'Καλώδια','Capacitor':'Πυκνωτής','Capacitors':'Πυκνωτές','Transistor':'Τρανζίστορ','Transistors':'Τρανζίστορ','Controller':'Ελεγκτής','Memory chips':'Τσιπ μνήμης','Memory chip':'Τσιπ μνήμης','I/O bracket':'Βάση θυρών I/O','Logo light':'Φωτισμός λογοτύπου','Shroud':'Κάλυμμα','Coldplate':'Πλάκα επαφής','Thermal compound':'Θερμική πάστα','Fin stack':'Συστοιχία πτερυγίων','Fins':'Πτερύγια','Top cover':'Επάνω κάλυμμα','Cooler fan':'Ανεμιστήρας ψύκτρας','Fan clips':'Κλιπ ανεμιστήρα','Clips':'Κλιπ','Mounting hardware':'Εξαρτήματα στερέωσης','Mount':'Βάση στερέωσης','Desktop computer':'Επιτραπέζιος υπολογιστής','Desktop PC':'Επιτραπέζιος υπολογιστής','Chassis frame':'Σκελετός κουτιού','Frame':'Σκελετός','Side panels':'Πλαϊνά καλύμματα','Side panel':'Πλαϊνό κάλυμμα','Front panel':'Μπροστινό κάλυμμα','Dust filters':'Φίλτρα σκόνης','Dust filter':'Φίλτρο σκόνης','Top panel':'Επάνω κάλυμμα','Power supply shroud':'Κάλυμμα τροφοδοτικού','PSU shroud':'Κάλυμμα PSU','Board standoffs':'Αποστάτες μητρικής','Power supply unit':'Τροφοδοτικό (PSU)','Power cabling':'Καλώδια τροφοδοσίας','Cabling':'Καλωδίωση','Processor cooler':'Ψύκτρα επεξεργαστή','CPU cooler':'Ψύκτρα επεξεργαστή (CPU)','Liquid cooler':'Υδρόψυξη','Case fans':'Ανεμιστήρες κουτιού','Case fan':'Ανεμιστήρας κουτιού','Printed circuit board':'Πλακέτα τυπωμένου κυκλώματος','Steel support frame':'Μεταλλικός σκελετός στήριξης','Backplate magnets':'Μαγνήτες πίσω πλάκας','Magnet':'Μαγνήτης','ARGB light strip':'Φωτεινή λωρίδα ARGB','Light strip':'Φωτεινή λωρίδα','Thermal pads':'Θερμικά επιθέματα','BGA solder connections':'Συνδέσεις κόλλησης BGA','VRM chokes':'Πηνία VRM','Choke':'Πηνίο','Integrated power stages':'Ολοκληρωμένα στάδια τροφοδοσίας','Power stage':'Στάδιο τροφοδοσίας','Multiphase controllers':'Πολυφασικοί ελεγκτές','PWM controller':'Ελεγκτής PWM','Polymer capacitors':'Πολυμερείς πυκνωτές','Ceramic decoupling capacitors':'Κεραμικοί πυκνωτές αποσύζευξης','Ceramic capacitor':'Κεραμικός πυκνωτής'
};
const tokenPairs:[RegExp,string][] = [
 [/\bassembly\b/gi,'συναρμολόγηση'],[/\bmodule\b/gi,'μονάδα'],[/\bpackage\b/gi,'πακέτο'],[/\bchip\b/gi,'τσιπ'],[/\bdie\b/gi,'πυρήνας'],[/\bboard\b/gi,'πλακέτα'],[/\bplate\b/gi,'πλάκα'],[/\bbracket\b/gi,'βάση'],[/\bfan\b/gi,'ανεμιστήρας'],[/\bmotor\b/gi,'κινητήρας'],[/\bheatsink\b/gi,'ψύκτρα'],[/\bconnector\b/gi,'σύνδεσμος'],[/\bslot\b/gi,'υποδοχή'],[/\bsocket\b/gi,'υποδοχή'],[/\bmemory\b/gi,'μνήμη'],[/\bpower\b/gi,'τροφοδοσία'],[/\bcontroller\b/gi,'ελεγκτής'],[/\bcore\b/gi,'πυρήνας'],[/\bcache\b/gi,'κρυφή μνήμη'],[/\binterface\b/gi,'διεπαφή'],[/\bchannel\b/gi,'κανάλι'],[/\bchannels\b/gi,'κανάλια'],[/\bcell\b/gi,'κελί'],[/\bcells\b/gi,'κελιά'],[/\bbank\b/gi,'τράπεζα'],[/\bbanks\b/gi,'τράπεζες'],[/\bthermal\b/gi,'θερμικό'],[/\bcopper\b/gi,'χάλκινο'],[/\bdisplay\b/gi,'εικόνας'],[/\bmounting\b/gi,'στερέωσης'],[/\bretention\b/gi,'συγκράτησης'],[/\binput\b/gi,'εισόδου'],[/\boutput\b/gi,'εξόδου']
];
export function hardwareNameEl(s:string){ if(exact[s]) return exact[s]; let out=s; for(const [r,v] of tokenPairs) out=out.replace(r,v); return out; }

export function descriptionEl(c:Concept){
 const n=hardwareNameEl(c.name); const cat=categoryEl[c.category];
 return `Το «${n}» είναι στοιχείο της κατηγορίας «${cat}». Εδώ εμφανίζεται σε τρισδιάστατη εκπαιδευτική απεικόνιση ώστε να δεις τη θέση, το σχήμα και τη σχέση του με τα υπόλοιπα μέρη του υπολογιστή.`;
}
export function purposeEl(c:Concept){
 const p:Record<Category,string>={
 Chassis:'Στηρίζει και προστατεύει τα εξαρτήματα και οργανώνει τη φυσική τους τοποθέτηση.',
 Cooling:'Βοηθά στην απομάκρυνση της θερμότητας ώστε τα εξαρτήματα να λειτουργούν σε ασφαλή θερμοκρασία.',
 Board:'Συμμετέχει στις ηλεκτρικές συνδέσεις και στην επικοινωνία των εξαρτημάτων πάνω στη μητρική πλακέτα.',
 Power:'Συμμετέχει στην παροχή και ρύθμιση της ηλεκτρικής ενέργειας που χρειάζεται ο υπολογιστής.',
 Memory:'Συμμετέχει στην προσωρινή αποθήκευση και γρήγορη πρόσβαση στα δεδομένα που χρησιμοποιεί ο επεξεργαστής.',
 Storage:'Συμμετέχει στη μόνιμη αποθήκευση αρχείων, εφαρμογών και δεδομένων.',
 Compute:'Συμμετέχει στην εκτέλεση εντολών και στους υπολογισμούς του συστήματος.',
 Graphics:'Συμμετέχει στην επεξεργασία γραφικών, εικόνας και παράλληλων υπολογισμών.'};
 return p[c.category];
}
export function quantityEl(s:string){
 const nums=s.match(/\d+(?:\.\d+)?/g)?.join(', ');
 return nums ? `Ποσότητα/στοιχεία στο μοντέλο: ${nums}` : 'Εκπαιδευτική απεικόνιση ενός ή περισσότερων σχετικών στοιχείων.';
}
export function accuracyEl(){ return 'Το 3D μοντέλο είναι εκπαιδευτική απεικόνιση. Οι διαστάσεις και τα τεχνικά χαρακτηριστικά ακολουθούν τις διαθέσιμες πηγές όπου αυτό είναι δυνατό, ενώ ορισμένες εσωτερικές λεπτομέρειες είναι ενδεικτικές.'; }

export const specKeyEl=(k:string)=>({
 'Form factor':'Μορφή','Expansion':'Επέκταση','Memory':'Μνήμη','Installed':'Εγκατεστημένο','Specimen':'Μοντέλο αναφοράς','Standard':'Πρότυπο','Rails':'Γραμμές τάσης','GPU connector':'Σύνδεση GPU','Package':'Συσκευασία','Lid':'Μεταλλικό κάλυμμα','Contacts':'Επαφές','Channels':'Κανάλια','Capacity':'Χωρητικότητα','Dimensions':'Διαστάσεις','Protocol':'Πρωτόκολλο','Interface':'Διεπαφή','Format':'Μορφή','Type':'Τύπος','Layout':'Διάταξη','Voltage':'Τάση','Timings':'Χρονισμοί','Burst':'Ριπή δεδομένων','Placement':'Θέση','Cooling':'Ψύξη','Power':'Ισχύς','Clock':'Συχνότητα','Cores':'Πυρήνες','Threads':'Νήματα','Process':'Λιθογραφία','Bandwidth':'Εύρος ζώνης','Speed':'Ταχύτητα','Size':'Μέγεθος','Count':'Πλήθος','Material':'Υλικό','Function':'Λειτουργία','Connector':'Σύνδεσμος','Width':'Πλάτος','Height':'Ύψος','Length':'Μήκος','Manufacturer':'Κατασκευαστής','Model':'Μοντέλο','Category':'Κατηγορία','Quantity':'Ποσότητα','Description':'Περιγραφή','Purpose':'Χρήση','Available':'Διαθέσιμο','Location':'Θέση','Material':'Υλικό','Pitch':'Απόσταση','Thickness':'Πάχος','Geometry':'Γεωμετρία','Pattern':'Διάταξη','Venting':'Αερισμός','Attachment':'Στερέωση','Removable':'Αφαιρούμενο','Control':'Έλεγχος','Contact':'Επαφή','Routing':'Διαδρομή','Design':'Σχεδίαση','Inventory':'Κατάλογος εξαρτημάτων','Physical fin count':'Πραγματικό πλήθος πτερυγίων','Blade count':'Πλήθος πτερυγίων','Compute units':'Μονάδες υπολογισμού','Total board power':'Συνολική ισχύς κάρτας','Exterior reference':'Εξωτερικό μοντέλο αναφοράς','Board outline':'Περίγραμμα πλακέτας','Power phases':'Φάσεις τροφοδοσίας','Data rate':'Ρυθμός δεδομένων','Values and placement':'Τιμές και θέση','Count and placement':'Πλήθος και θέση','Ball count':'Πλήθος επαφών','Die area':'Επιφάνεια πυρήνα'
} as Record<string,string>)[k] ?? hardwareNameEl(k);

export function specValueEl(v:string){
 let out=v
 .replace(/\binstalled\b/gi,'εγκατεστημένο').replace(/\bfor comparison\b/gi,'για σύγκριση')
 .replace(/\billustrative\b/gi,'ενδεικτικό').replace(/\bapproximate\b/gi,'κατά προσέγγιση')
 .replace(/\bfront\b/gi,'μπροστά').replace(/\brear\b/gi,'πίσω').replace(/\btop\b/gi,'επάνω').replace(/\bbottom\b/gi,'κάτω')
 .replace(/\binput\b/gi,'είσοδος').replace(/\boutput\b/gi,'έξοδος').replace(/\bmemory\b/gi,'μνήμη')
 .replace(/\byes\b/gi,'ναι').replace(/\bno\b/gi,'όχι').replace(/\bnot claimed\b/gi,'δεν δηλώνεται').replace(/\bnot asserted\b/gi,'δεν προσδιορίζεται')
 .replace(/\bspring steel\b/gi,'ελατηριωτός χάλυβας').replace(/\baluminium\b/gi,'αλουμίνιο').replace(/\bsteel\b/gi,'χάλυβας')
 .replace(/\bthree expansion slots\b/gi,'τρεις θέσεις επέκτασης').replace(/\bsix magnets\b/gi,'έξι μαγνήτες').replace(/\bas thin as contact allows\b/gi,'όσο λεπτό επιτρέπει η σωστή επαφή');
 return out;
}
export const phaseEl=(s:string)=>({'Assembled':'Συναρμολογημένο','Dissection':'Αποσυναρμολόγηση','Inventory':'Κατάλογος εξαρτημάτων'} as Record<string,string>)[s] ?? s;


// Απλές εκπαιδευτικές πληροφορίες για μαθητές Δημοτικού.
export function locationEl(c:Concept){
 const m:Record<Category,string>={
 Chassis:'Είναι το εξωτερικό μέρος που περιβάλλει και προστατεύει τα εξαρτήματα.',
 Cooling:'Βρίσκεται κοντά στα εξαρτήματα που ζεσταίνονται ή στα ανοίγματα του κουτιού.',
 Board:'Βρίσκεται πάνω ή γύρω από τη μητρική πλακέτα, όπου συνδέονται πολλά εξαρτήματα.',
 Power:'Βρίσκεται στο σύστημα τροφοδοσίας και μεταφέρει ηλεκτρική ενέργεια στα εξαρτήματα.',
 Memory:'Η μνήμη RAM τοποθετείται στις ειδικές υποδοχές της μητρικής πλακέτας.',
 Storage:'Οι μονάδες αποθήκευσης συνδέονται στη μητρική πλακέτα, μέσα στο κουτί.',
 Compute:'Ο επεξεργαστής βρίσκεται στην ειδική υποδοχή CPU της μητρικής πλακέτας.',
 Graphics:'Η κάρτα γραφικών συνδέεται συνήθως σε μεγάλη υποδοχή PCIe της μητρικής πλακέτας.'};
 return m[c.category];
}
export function cooperatesEl(c:Concept){
 const m:Record<Category,string>={
 Chassis:'Συνεργάζεται με όλα τα εξαρτήματα, γιατί τα κρατά οργανωμένα και προστατευμένα.',
 Cooling:'Συνεργάζεται κυρίως με τον επεξεργαστή, την κάρτα γραφικών και το κουτί.',
 Board:'Συνδέει τον επεξεργαστή, τη RAM, την αποθήκευση, την κάρτα γραφικών και το τροφοδοτικό.',
 Power:'Δίνει ενέργεια στη μητρική πλακέτα, στον επεξεργαστή, στην κάρτα γραφικών και στις μονάδες αποθήκευσης.',
 Memory:'Συνεργάζεται πολύ στενά με τον επεξεργαστή, κρατώντας προσωρινά τα δεδομένα που χρειάζεται.',
 Storage:'Στέλνει προγράμματα και αρχεία στη RAM και στον επεξεργαστή όταν τα χρειαζόμαστε.',
 Compute:'Συνεργάζεται με τη RAM, την αποθήκευση, τη μητρική πλακέτα και την κάρτα γραφικών.',
 Graphics:'Συνεργάζεται με τον επεξεργαστή και τη RAM για να δημιουργεί εικόνες και γραφικά.'};
 return m[c.category];
}
export function funFactEl(c:Concept){
 const m:Record<Category,string>={
 Chassis:'Το κουτί δεν είναι μόνο για εμφάνιση: βοηθά και τον αέρα να κινείται σωστά μέσα στον υπολογιστή.',
 Cooling:'Αν ένας υπολογιστής ζεσταθεί πολύ, μπορεί να μειώσει μόνος του την ταχύτητά του για προστασία.',
 Board:'Η μητρική πλακέτα μοιάζει με μια μικρή πόλη με «δρόμους» που μεταφέρουν ηλεκτρικά σήματα.',
 Power:'Το τροφοδοτικό μετατρέπει το ρεύμα της πρίζας στις τάσεις που χρειάζονται τα εξαρτήματα του PC.',
 Memory:'Η RAM είναι πολύ γρήγορη, αλλά τα δεδομένα της χάνονται όταν κλείσει ο υπολογιστής.',
 Storage:'Σε έναν SSD δεν υπάρχουν κινούμενοι δίσκοι όπως στους παλιότερους σκληρούς δίσκους HDD.',
 Compute:'Ένας σύγχρονος επεξεργαστής μπορεί να εκτελεί δισεκατομμύρια απλές ενέργειες κάθε δευτερόλεπτο.',
 Graphics:'Η GPU μπορεί να κάνει πολλούς υπολογισμούς ταυτόχρονα και γι’ αυτό είναι πολύ καλή στα γραφικά.'};
 return m[c.category];
}
