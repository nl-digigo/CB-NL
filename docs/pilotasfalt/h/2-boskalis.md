# Boskalis

## Inleiding
Dit hoofdstuk is beschreven vanuit de bril van Boskalis als dataleverende partij.
Centraal stond een Linked Data versie van PIM, dat gekoppeld kan worden aan andere Linked datasets (denk aan materiaal databases, prognose data, meetdata, OTL-en, etc.).
Om de data te viewen is er een PIM-viewer opgetuigd met bijvoorbeeld een kaart voor het weergeven van GIS-data, een kenmerkscherm voor het browsen van kenmerken en relaties en wellicht enkele speciale widgets zoals bijv een boorkern visualisatie. 
Om de data nog in een geprefereerd formaat te krijgen zijn export modules gebruikt. Via Sparql en/of mini-ontologieën is het goed mogelijk om de gewenste data eruit te halen en deze vervolgens (via software) te serialiseren naar een ander formaat zoals excel, Geopackage, ICDD, GraphQL, etc.

## PIM-OTL
PIM-OTL staat voor de OTL van het samenwerkingsverband van acht in PIM participerende wegenbouwaannemers. Inmiddels omvat deze OTL meer concepten, relaties en attributen dan in het informatiesysteem PIM zelf zijn opgenomen. De ambitie is om met het NEN 2660 compliant maken van de PIM-OTL een doorontwikkeling te laten plaatsvinden naar een landelijke gestandaardiseerde Wegenbouw-OTL.
Bij de ontwikkeling van het systeem PIM is een vereiste geweest dat het object ‘wegverharding/wegconstructie’, zodanig ge(de)componeerd moest zijn, dat alle objectniveaus waarop in de wegenbouwpraktijk eisen worden gesteld of data worden geregistreerd expliciet aanwezig moesten zijn. Tevens moest hierbij de materialisering volgens een eenduidige taxonomie zijn beschreven. Voor de toekomstvastheid van het systeem PIM werd het noodzakelijk geacht dat aan deze eisen werd voldaan. Ten tijde van de keuzes die moesten worden gemaakt voor de decompositie en taxonomie voor PIM werd nog aangenomen dat de NEN 2767 een goede basis zou moeten vormen, maar al snel bleek dat deze standaard ontoereikend was voor de ontwikkeling van PIM.
De basis voor PIM-OTL is gelegd met het vaststellen van de decompositie benodigde taxonomie voor de ontwikkeling van PIM, zoals weergegeven in figuur 1. De belangrijkste uitgangspunten bij de ontwikkeling van dit schema waren:
-	Alle objectniveaus waarop in de sector eisen gesteld kunnen worden of data moeten worden vastgelegd moeten in expliciet benoemd zijn
-	Het laagste objectniveau in de decompositie is het niveau waarop het object daadwerkelijk wordt vormgegeven of gerealiseerd
-	Alle benodigde relaties vanaf een bouwstof van een asfaltmengsel tot aan de gehele samengestelde wegconstructie moeten eenduidig zijn.
Er is bij de ontwikkeling van PIM ook een belangrijke keuze gemaakt om in het systeem PIM alleen de reëel/discrete objecten en materialisering van een wegconstructie op te nemen en geometrieën en/of ruimtelijke gebieden buiten PIM te houden. Deze worden in GIS geregistreerd en beheerd. De reden hiervoor is dat de structuur voor aanlegdata voor de hele levenscyclus van een wegconstructie uniform is, waar de structuur voor functionele objecten in de assetmanagementfase sterk uiteenlopend en per beheerder of belanghebbende variabel kan zijn.
De basisstructuur voor data die gedeeld of uitgewisseld moeten kunnen worden tussen aannemer en (weg)beheerder is na het tot stand komen van de NEN 2660:2022 beschreven, zoals in figuur 2 is weergegeven. In dit schema betreft de linkerzijde in principe de ‘aanlegzijde’ en de rechterzijde ‘de beheer(ders)zijde’.
Vanuit de basis (figuur 2 en 3) wordt nu het PIM-OTL in vlot tempo doorontwikkeld , waarbij het de bedoeling is dat zo veel mogelijk aangesloten wordt bij standaarden (NEN 2660, NEN 3610 etc.) en bestaande domeinafspraken (IMBOR, RWS etc.). De actuele versie van de PIM-OTL (Excel) is momenteel op aanvraag ter inzage beschikbaar en wordt naar verwachting nog in 2022 gepubliceerd. Na publicatie is het PIM-OTL middels een OTL-viewer via het internet te raadplegen.
De positie of het detailniveau van PIM-OTL ten opzichte van de NEN 2660 en de NEN 3610 is weergegeven in figuur 2.

<figure id="figure">
  <img src="h/media/structuur_pim.png" alt="Structuur data objecten in PIM" />
  <figcaption>Structuur data objecten in PIM</figcaption>
</figure>


<figure id="figure">
  <img src="h/media/positie_pim.png" alt="Positie en detailniveau PIM-OTL" />
  <figcaption>Positie en detailniveau PIM-OTL</figcaption>
</figure>

## Rijkswaterstaat BIM-Provesy
BIM-Provesy is een Linked Data systeem ontwikkeld voor Rijkswaterstaat voor het centraliseren en koppelen van verhardings-informatie voor rijkswegen. Het systeem bevat valgewichtdeflectiemetingen, (gedetailleerde) boorkernen, garanties, CE informatie asfaltmengsels,  MJPV planningen, inspectie gegevens, KNMI gegevens, rekenresultaten en veel andere datasets. Onderdeel van de informatie stroom is het testen en toetsen van aangeleverde informatie via zogenaamde ‘validators’. Deze validators testen de dataset en produceren een rapportage hiervan.

<figure id="figure">
  <img src="h/media/rws_bimprovesy.PNG" alt="BIM-Provesy" />
  <figcaption>BIM-Provesy</figcaption>
</figure>

BIM-Provesy werkt op basis van Linked data en probeert datasets te relateren. Vaak worden datasets op basis van BPS of GPS locaties gerelateerd. Andere relaties zijn weerstation relaties en bijv asfaltmengsel relaties. De objecten en kenmerken zijn grotendeels afkomstig uit de RWS OTL (versie 1.71 met OTL-Provesy objecten). 

## BIM-V uitbreidingen volgens Linked Data architectuur
BIM-V houdt zich aan de Linked data architectuur waarbij databronnen gekoppeld kunnen worden door bijv (her-) gebruik van URI’s of door het leggen van een relatie op basis van een gezamelijke waarde. Extra context en evt extra verrijking vanwege de aanwezigheid van deze context is mogelijk door de data te koppelen aan een netwerk van (gerelateerde) OTL-en.

<figure id="figure">
  <img src="h/media/otl_aanpak.png" alt="Gedistribueerde aanpak OTL's" />
  <figcaption>Gedistribueerde aanpak OTL's</figcaption>
</figure>

<figure id="figure">
  <img src="h/media/boskalis_invulling.png" alt="Invulling OTL en datalandschap door Boskalis" />
  <figcaption>Invulling OTL en datalandschap door Boskalis</figcaption>
</figure>


## POC’s BIM-V en PIM
In 2 Proof-of-concepts is er PIM data omgezet naar Linked Data die zeer makkelijk bruikbaar was binnen BIM-V. Grofweg zijn de volgende punten aan bod gekomen binnen de POC’s 
<ol><li>Conversie van PIM data naar Linked data </li>
<li>Niet alle PIM data is in eerste instantie relevant voor uitwisseling. Denk hierbij aan (interne) proces informatie en of interne goedkeuringen en/of ‘oude’ versies van objecten.</li>
<li>2D GIS data is ook makkelijk om te zetten naar Linked Data zodat er 1 homogene dataset bestaat met GIS en PIM data</li>
<li>	Datasets zoals WITOS gegevens zijn makkelijk toe te voegen aan de dataset indien deze omgezet zijn naar Linked Data</li>
<li>	Intepretatie van PIM data wordt makkelijker indien deze gekoppeld is met een OTL met definities en beschrijvingen</li>
<li>	Integratie van PIM data met BIM-V data is grotendeels gebaseerd op locatie </li>
<ol><li>	Denk hierbij aan GIS gebaseerde integratie</li>
<li>Uniforme aanduiding van (locaties op) wegen is wellicht zeer handig</li></ol>
<li>	Verdere integratie door afstemming lijkt zeer goed mogelijk in de vorm van een gedragen OTL voor wegenbouw met bijv </li>
<ol><li>	een uniforme constructie opbouw van een weg </li>
<li>	een uniforme manier om (conditie) metingen op te slaan (denk aan intensiteit, VGD,boorkernen, etc)</li>
<li>	een uniforme manier voor locatie afspraken (denk aan BPS, GPS, NWB en 2D/3D geometrie beschrijvingen)</li></ol></ol>


## OTL-PIM/OTL-Wegenbouw
Linked datasets op basis van een gedragen OTL-PIM/OTL-Wegenbouw kunnen zeer makkelijk in BIM-V geplaatst worden omdat BIM-V gebaseerd is op Linked data. Indien standardisatie van een OTL-PIM/OTL-wegenbouw leidt tot een markt waarbij meerdere partijen data kunnen aanleveren volgens dit formaat lijkt een consistentie opbouw en beheer van gedetailleerde verhardings informatie dichter bij te komen. Een dergelijk model zal wellicht interactie hebben met de BGT en/of IMBOR. Vooralsnog is RWS zeer geinteresseerd in de haalbaarheid van dit soort oplossingen en participeert vanwege deze interesse in deze use-case om meer zicht hierop te krijgen.
