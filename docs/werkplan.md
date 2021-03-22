# Werkplan

## Kernmodel CB-NL Inrichten
Deze actie betreft het verwerken van het in de NEN2660 (en NTA8035) bepaalde topmodel in de
CB-NL en het herinrichten van de taxonomie van CB-NL op zodanige wijze dat deze kan dienen als kernmodel waaraan gemodelleerde standaarden en datastructuren als OTL’s kunnen verbinden. Het CB-NL-kernmodel doet dus dienst als taxonomie waarin de in de bouw meest gangbare begrippen eenduidig zijn gedefinieerd.

Een eerste aanzet voor de taken die uitgevoerd moeten worden in dit kader:
- Architectuurbeslissing nemen over 'Taalbindingsniveaus' (SKOS, RDFS/OWL, SHACL)
<div class="issue" data-number="3"></div>
- Metamodel CB-NL aanpassen
<div class="issue" data-number="4"></div>
- Taxonomie aanpassen aan NEN2660 richtlijnen
- Concepten beoordelen op juiste plek in de taxonomie
<div class="issue" data-number="5"></div>
- Afstemming 'diepte' van de CB-NL inhoud. Waar en hoe sluiten modellen als PIM en IMBOR aan op CB-NL
- Vaststellen 'distributiediensten'. sparql endpoint, filedownloads, hulpmiddelen, documentatie ...

## Inrichten van de CB-NL omgeving en werkplaats

__Het inrichten van de CB-NL omgeving__ betreft het koppelen (zo veel mogelijk op basis van het extensie mechanisme) van de voor de pilot relevante onderdelen van enkele sector standaarden, zodat deze samen een basis-OTL vormen van de in de sector overeengekomen afspraken. Hierbij is dus het uitgangspunt dat als een partij een standaard volgt, deze dus niet meer in zijn eigen OTL gemodelleerd hoeft te worden.

__Het inrichten van de CB-NL-werkplaats:__ Dit is het gedeelte waar de interface naar de gebruikers een belangrijke rol gaat spelen. Het betreft het creëren van de benodigde hulpmiddelen voor extenden en refereren van deze “basis-OTL” naar de relevante delen van de organisatie-eigen OTL’s.

## Praktijktoets

Een praktijktoets met een RWS-project, waarbij een onderdeel van de OTL-RWS, de OTL-IMBOR van de provincies en de OTL van de aannemer wordt gekoppeld aan het kernmodel van CB-NL. Voor de asfaltverharding zal gekeken worden naar het gebruik van het Pavement Information Model (PIM). Gedacht wordt verder aan een wegenbouwproject met asfaltverharding en mogelijk een kunstwerk. Gewerkt zal worden met echte projectdata, maar losgekoppeld van de voortgang van dat project.