# Ontwerpbeslissingen

# Ontwerpbeslissingen

## Scope:

Een kernmodel voor de GWW sector wat uitgaat van de NEN2660 en daar verder op ‘extend’ zodanig dat modellen als IMBOR en methodes als NEN2767 erop kunnen aanhaken. Het is dus niet de bedoeling dat in deze eerste versie van het kernmodel alle concepten uit de GWW sector zijn te vinden.
De modellen die aan kunnen haken aan het kernmodel zijn (niet uitputtend):
- IMBOR
- IMGEO
- NEN 2767
- OTL RWS, OTL-Amsterdam, OTL-Gelderland, OTL-Noord Holland
- IFC
- ETIM
- PIM

Deze modellen zijn specifiek en voor een bepaalde use case ontwikkeld. Het kernmodel wordt generiek en richt zich op interoperabiliteit en uitwisselbaarheid.

## Taalbindingen: 

De CB-NL richt zich op de toepassingstypen:
- 'afstemming van termen en definities' (1) (SKOS) en 
- 'gegevensuitwisseling of -deling' (2) (RDFS of RDFS+OWL) 

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

