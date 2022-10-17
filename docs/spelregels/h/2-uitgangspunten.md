# Uitgangspunten

## Use cases

### Woordenboek
<aside class="note" title="Scenario 1: Woordenboek">
Ik wil opzoeken in CB-NL ‘thesaurus’ wat de betekenis is van een begrip in de bouw (ook wel het woordenboek genoemd). Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>
</aside>

### Aansluiting BIM standaarden
Het is niet de bedoeling dat in deze eerste versie van het kernmodel alle concepten uit de gebouwde omgeving zijn te vinden, alleen voldoende uitbreiding van de NEN 2660-2 dat BIM standaarden erop kunnen aansluiten.

<aside class="note" title="Scenario 2: Koppelen van BIM standaarden">
Ik wil mijn BIM-standaard (linked data) koppelen aan het Kernmodel. Hiertoe dien ik herkenbare objecten en eigenschappen in het Kernmodel te vinden, waarop ik de concepten van mijn standaard kan subtyperen / extenden. De betreffende standaard in linked data heeft benoemde relaties. Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>
</aside>

<aside class="note" title="Scenario 3: Koppelen niet-linked data">
Ik wil mijn standaard mappen (relateren) aan objecten (en wellicht eigenschappen) van CB-NL, maar mijn standaard is niet beschikbaar als linked data. Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>
</aside>


De modellen die binnen deze use cases aan kunnen haken aan het kernmodel zijn bijvoorbeeld (niet uitputtend):
* IMBOR
* IMGEO
* NEN 2767
* IFC
* ETIM
* NL-sfb

Deze modellen zijn specifiek en voor een bepaalde use case ontwikkeld. Het kernmodel wordt generiek en richt zich op interoperabiliteit en uitwisselbaarheid.

### Gebruik voor OTL's
<aside class="note" title="Scenario 4: Bouwstenen ontologie">
Ik wil een OTL (ontologie in linked data) maken voor mijn organisatie die voldoet aan de NEN2660. Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>
</aside>

De modellen die binnen deze use case aan kunnen haken aan het kernmodel zijn bijvoorbeeld (niet uitputtend):

* OTL RWS, OTL-Amsterdam, OTL-Gelderland, OTL-Noord Holland
* PIM

Deze modellen zijn specifiek en voor een bepaalde use case ontwikkeld. Het kernmodel wordt generiek en richt zich op interoperabiliteit en uitwisselbaarheid.

## Taalbindingen: 

De CB-NL richt zich op de toepassingstypen:
* 'afstemming van termen en definities' (1) (SKOS) en 
* 'gegevensuitwisseling of -deling' (2) (RDFS of RDFS+OWL) 

uit de NEN2660. 

Het toepassingstype 'gegevensintegratie en innovatie' (3) (RDFS+SHACL) zien we als toepassingstype wat in onderliggende 'OTL' ontologieën van toepassing kan zijn, maar de keuze welke beperkingen er op bepaalde concepten gelden willen we niet in de CB-NL vastleggen.

## Opbouw van de CB-NL:

### Vocabulaire
Er wordt een vocabulaire gemaakt en een taxonomie. De vocabulaire wordt uitgedrukt in SKOS concepten met een voorkeursdefinitie. In de definitie worden de definiërende zaken/eigenschappen meegenomen.

Het woordenboek kan op deze manier worden hergebruikt op een laagdrempelige wijze wat de adaptatie van het kernmodel bespoedigt. 

Iedere definitie krijgt een bronvermelding. Er kunnen meerdere definities aan een concept hangen. Eén van de definities is de voorkeursdefinitie.

### Taxonomie
De Taxonomie wordt opgebouwd uit de concepten van de vocabulaire. De hiërarchie wordt bepaalt door de definitie. De definitie kan worden aangescherpt of aangevuld a.d.h.v. de plek in de taxonomie.

De taxonomie wordt geschreven in rdf/rdfs en niet in skos. Er wordt naar skos concepten verwezen door rdfs:isDefinedBy. De subtypering wordt gedefinieerd door rdfs:subClassOf en niet skos:narrower.

De taxonomie mag multiple inheritance gebruiken. Hoe de definitie wordt uitgeschreven is tijdens de meeting nog een punt van discussie.
De taxonomie is er om te ‘extenden’ en niet om te mappen.
