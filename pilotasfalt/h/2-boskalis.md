# Boskalis

## Inleiding

Dit hoofdstuk is beschreven vanuit de bril van Boskalis als dataleverende partij.
Centraal stond een Linked Data versie van PIM, dat gekoppeld kan worden aan andere Linked datasets (denk aan materiaal databases, prognose data, meetdata, OTL-en, etc.).
Om de data te viewen is er een PIM-viewer opgetuigd met bijvoorbeeld een kaart voor het weergeven van GIS-data, een kenmerkscherm voor het browsen van kenmerken en relaties en wellicht enkele speciale widgets zoals bijv een boorkern visualisatie. 
Om de data nog in een geprefereerd formaat te krijgen zijn export modules gebruikt. Via Sparql en/of mini-ontologieën is het goed mogelijk om de gewenste data eruit te halen en deze vervolgens (via software) te serialiseren naar een ander formaat zoals excel, Geopackage, ICDD, GraphQL, etc.

<aside class="note" Title="PIM">
Acht grote Nederlandse wegenbouwbedrijven, waaronder Boskalis Nederland, hebben een uniform softwaresysteem ontwikkeld om realisatie en onderhoud van wegverhardingen te optimaliseren. Pavement Information Modelling (PIM) is een hulpmiddel bij efficiënt werken en procesbeheersing in asfalt. De software van PIM volgt het wegverhardingsproces digitaal, vanaf de ontwerpfase tot en met aanleg van het asfalt. Een project legt bijvoorbeeld de volgende zaken vast: hoeveel asfalt er nodig is, welke mengsels gebruikt gaan worden, welk materieel wordt ingezet, tussentijdse controles en keuringen. Asfaltaanvragen en planningen voor productie door de asfaltcentrale worden ook geregeld met PIM.  Bron: <a href="https://nederland.boskalis.com/over-ons/nieuws/detail/pim-de-toekomst-in-asfalt.html">Website Boskalis</a></aside>

## PIM-OTL

[=PIM-OTL=] staat voor de OTL van het samenwerkingsverband van acht in PIM participerende wegenbouwaannemers. Inmiddels omvat deze OTL meer concepten, relaties en attributen dan in het informatiesysteem PIM zelf zijn opgenomen. De ambitie is om met het [[NEN_2660_2_2022]]compliant maken van de PIM-OTL een doorontwikkeling te laten plaatsvinden naar een landelijke gestandaardiseerde Wegenbouw-OTL.
Bij de ontwikkeling van het systeem PIM is een vereiste geweest dat het object ‘wegverharding/wegconstructie’, zodanig ge(de)componeerd moest zijn, dat alle objectniveaus waarop in de wegenbouwpraktijk eisen worden gesteld of data worden geregistreerd expliciet aanwezig moesten zijn. Tevens moest hierbij de materialisering volgens een eenduidige taxonomie zijn beschreven. Voor de toekomstvastheid van het systeem PIM werd het noodzakelijk geacht dat aan deze eisen werd voldaan. Ten tijde van de keuzes die moesten worden gemaakt voor de decompositie en taxonomie voor PIM werd nog aangenomen dat de [[NEN_2767_1_2019]] een goede basis zou moeten vormen, maar al snel bleek dat deze standaard ontoereikend was voor de ontwikkeling van PIM.


### Inhoud

De basis voor [=PIM-OTL=] is gelegd met het vaststellen van de decompositie benodigde taxonomie voor de ontwikkeling van PIM, zoals weergegeven in figuur 1. De belangrijkste uitgangspunten bij de ontwikkeling van dit schema waren:
<ul>
<li>Alle objectniveaus waarop in de sector eisen gesteld kunnen worden of data moeten worden vastgelegd moeten in expliciet benoemd zijn</li>
<li>Het laagste objectniveau in de decompositie is het niveau waarop het object daadwerkelijk wordt vormgegeven of gerealiseerd</li>
<li>Alle benodigde relaties vanaf een bouwstof van een asfaltmengsel tot aan de gehele samengestelde wegconstructie moeten eenduidig zijn.</li></ul>

Er is bij de ontwikkeling van PIM ook een belangrijke keuze gemaakt om in het systeem PIM alleen de reëel/discrete objecten en materialisering van een wegconstructie op te nemen en geometrieën en/of ruimtelijke gebieden buiten PIM te houden. Deze worden in GIS geregistreerd en beheerd. De reden hiervoor is dat de structuur voor aanlegdata voor de hele levenscyclus van een wegconstructie uniform is, waar de structuur voor functionele objecten in de assetmanagementfase sterk uiteenlopend en per beheerder of belanghebbende variabel kan zijn.

De basisstructuur voor data die gedeeld of uitgewisseld moeten kunnen worden tussen aannemer en (weg)beheerder is na het tot stand komen van de [[NEN_2660_2_2022]] beschreven, zoals in figuur 2 is weergegeven. In dit schema betreft de linkerzijde in principe de ‘aanlegzijde’ en de rechterzijde ‘de beheer(ders)zijde’.
Vanuit de basis (figuur 2 en 3) wordt nu de [=PIM-OTL=] in vlot tempo doorontwikkeld , waarbij het de bedoeling is dat zo veel mogelijk aangesloten wordt bij standaarden (NEN 2660, NEN 3610 etc.) en bestaande domeinafspraken (<abbr title="Informatie Model Beheer Openbare Ruimte">IMBOR</abbr>, <abbr title="Rijkswaterstaat">RWS</abbr> etc.). De actuele versie van de PIM-OTL (Excel) is momenteel op aanvraag ter inzage beschikbaar en wordt naar verwachting nog in 2022 gepubliceerd. Na publicatie is het PIM-OTL middels een OTL-viewer via het internet te raadplegen.
De positie of het detailniveau van PIM-OTL ten opzichte van de [[NEN_2660_2_2022]] en de [[NEN_3610_2022]] is weergegeven in figuur 2.

<figure id="figure">
  <img src="h/media/structuur_pim.png" alt="Structuur data objecten in PIM" />
  <figcaption>Structuur data objecten in PIM</figcaption>
</figure>


<figure id="figure">
  <img src="h/media/positie_pim.png" alt="Positie en detailniveau PIM-OTL" />
  <figcaption>Positie en detailniveau PIM-OTL</figcaption>
</figure>

<dfn data-lt="Informatiemodel Beheer Openbare Ruimte|IMBOR">IMBOR</dfn>
<dd> Het Informatiemodel Beheer Openbare Ruimte (IMBOR) bevat de afspraken over de benamingen en definities van alle type objecten in de openbare ruimte en de beheergegevens die per type object vastgelegd kunnen worden. De objecttypen uit de Basisregistratie Grootschalige Topografie vormen de de geometrische representatie van de objecten in IMBOR. Zie ook <a href="https://www.crow.nl/thema-s/management-openbare-ruimte/imbor">deze website</a> en <a href="https://docs.crow.nl/onto-verkenner/imbor/#/view">deze viewer</a>  </dd>
