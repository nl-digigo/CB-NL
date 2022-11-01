# Uitgangspunten

## Use cases

### Woordenboek
<aside class="note" title="Scenario 1: Woordenboek">
Ik wil opzoeken in CB-NL ‘thesaurus’ wat de betekenis is van een begrip in de bouw (ook wel het woordenboek genoemd). Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a></aside>

### Aansluiting BIM standaarden
Het is niet de bedoeling dat in deze eerste versie van het kernmodel alle concepten uit de gebouwde omgeving zijn te vinden, alleen voldoende uitbreiding van de NEN 2660-2 dat BIM standaarden erop kunnen aansluiten.

<aside class="note" title="Scenario 2: Koppelen van BIM standaarden">
Ik wil mijn BIM-standaard (linked data) koppelen aan het Kernmodel. Hiertoe dien ik herkenbare objecten en eigenschappen in het Kernmodel te vinden, waarop ik de concepten van mijn standaard kan subtyperen / extenden. De betreffende standaard in linked data heeft benoemde relaties. Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>
</aside>

<aside class="note" title="Scenario 3: Koppelen niet-linked data">
Ik wil mijn standaard mappen (relateren) aan objecten (en wellicht eigenschappen) van CB-NL, maar mijn standaard is niet beschikbaar als linked data. Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>
</aside>


De modellen die binnen deze use cases aan kunnen haken aan het kernmodel zijn bijvoorbeeld (niet uitputtend):
* [=IMBOR=]
* [=IMGEO=]
* [=NEN 2767-4=]
* [=IFC=]
* [=ETIM=]
* [=NL-SfB=]

Deze modellen zijn specifiek en voor een bepaalde use case ontwikkeld. Het kernmodel wordt generiek en richt zich op interoperabiliteit en uitwisselbaarheid.

### Gebruik voor OTL's
<aside class="note" title="Scenario 4: Bouwstenen ontologie">
Ik wil een [=OTL =] maken voor mijn organisatie die voldoet aan de [[NEN_2660_2_2022]]. Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>
</aside>

De modellen die binnen deze use case aan kunnen haken aan het kernmodel zijn bijvoorbeeld (niet uitputtend):

* OTL RWS, OTL-Amsterdam, OTL-Gelderland, OTL-Noord Holland
* PIM

Deze modellen zijn specifiek en voor een bepaalde use case ontwikkeld. Het kernmodel wordt generiek en richt zich op interoperabiliteit en uitwisselbaarheid.

## Taalbindingen 

De CB-NL richt zich op de toepassingstypen:
* 'afstemming van termen en definities' (1) (SKOS) en 
* 'gegevensuitwisseling of -deling' (2) (RDFS of RDFS+OWL) 

uit de NEN2660. 

Het toepassingstype 'gegevensintegratie en innovatie' (3) (RDFS+SHACL) zien we als toepassingstype wat in onderliggende 'OTL' ontologieën van toepassing kan zijn, maar de keuze welke beperkingen er op bepaalde concepten gelden willen we niet in de CB-NL vastleggen.


## Opbouw van CB-NL 2.0

### Bronnen
De volgende bronnen zijn als input gebruikt voor CB-NL 2.0:
* <dfn data lt="ABDL">ABDL</dfn><dd>Ontologie van Rijkswaterstaat</dd>
* CB-NL 1.0
* <dfn data lt="IFC">IFC</dfn><dd>Een neutraal en open bestandsformaat voor het uitwisselen van BIM-specifieke informatie (modelobjecten en hun eigenschappen) tussen softwareapplicaties. IFC biedt een digitale beschrijving van de gebouwde omgeving, inclusief bouwwerken en civiele werken. Beheerd door Building SMART.</dd>
* <dfn data lt="NEN 2767-4">NEN 2767-4</dfn><dd>Bijlage bij de [[NEN_2767_1_2019]] van objectensamenstellingen voor conditiemetingen.</dd>
* <dfn data-lt="NLCS|De Nederlandse CAD Standaard">NLCS</dfn>
<dd> BIM loket beheert de Nederlandse CAD Standaard, de Nederlandse CAD standaard voor uitwisseling van informatie in 2D CAD-ontwerptekeningen. CAD betekent Computer-aided design: het ontwerpen van onder meer constructies en apparaten met behulp van computerprogramma's. De NLCS bevat basisafspraken over het omgaan met metadata, digitaal tekenen, het uiterlijk van de tekening en – vooral – de bestandsopbouw van 2D-tekenwerk. Deze afspraken zijn onafhankelijk van de CAD-platforms die geleverd worden door softwareleveranciers.  Zie ook <a href="https://www.bimloket.nl/p/365/NLCS">deze website</a>  </dd>
* <dfn data-lt="Informatiemodel Beheer Openbare Ruimte|IMBOR">IMBOR</dfn><dd> Het Informatiemodel Beheer Openbare Ruimte (IMBOR) bevat de afspraken over de benamingen en definities van alle type objecten in de openbare ruimte en de beheergegevens die per type object vastgelegd kunnen worden. De objecttypen uit de Basisregistratie Grootschalige Topografie (BGT) vormen de de geometrische representatie van de objecten in IMBOR. Zie ook <a href="https://www.crow.nl/thema-s/management-openbare-ruimte/imbor">deze website</a> en <a href="https://docs.crow.nl/onto-verkenner/imbor/#/view">deze viewer</a></dd>
* <dfn data-lt="IMGeo|Informatiemodel Geografie">IMGeo</dfn> <dd>Het Informatiemodel ontwikkeld voor objectgerichte geografische informatie in de Basisregistratie Grootschalige Topografie (BGT). Wegen zijn hierin opgenomen als 2D vlakobject. Verkeersborden zijn hierin opgenomen als 2D punt van het type "bord".</dd>
* GWSW
* <dfn data-lt="NEN3610">NEN3610</dfn>
<dd>NEN 3610 is de standaard voor het uitwisselen van geo-informatie, gebruikt Unified Modeling Language (UML) als formele taal voor het vastleggen van semantiek en beveelt Geography Markup Language (GML) aan als technisch uitwisselingsformat. NEN 3610 is hiermee nog niet geschikt om semantiek, gegevensdeling en uitwisseling middels Linked Data te realiseren. De NEN3610 is in 2021 herzien (t.o.v. 2011) en vormt de basis van de Samenhangende objecten registratie (SOR) die binnen het DiSGeo programma wordt opgetuigd.  <a href="https://geonovum.github.io/NEN3610-Linkeddata/#inleiding">bron: Geonovum</a>  </dd>
* <dfn data-lt="PIM-OTL">PIM-OTL</dfn><dd>Een wegenbouw informatiemodel ontwikkeld door een aantal grote opdrachtnemers.</dd>
* <dfn data lt="Aquo">Aquo</dfn>?<dd>De Aquo-standaard maakt het mogelijk om op een uniforme manier gegevens van een object met een ruimtelijk kenmerk uit te wisselen tussen partijen die betrokken zijn bij het waterbeheer. Het vormt hiermee de digitale schakel tussen de waterbeheerders Rijkswaterstaat, provincies en waterschappen, maar ook tussen waterbeheerders en derden zoals bedrijven en onderzoeksinstellingen. Aquo wordt beheerd door het Informatiehuis Water; een samenwerkingsprogramma van de provincies, waterschappen en Rijkswaterstaat.</dd>
* <dfn data lt="NL-SfB">NL-SfB</dfn>?<dd>NL/SfB is een classificatie voor gebouwonderdelen in Nederland. Bouw- en installatiebedrijven coderen met deze open standaard lagen en objecten in BIM en CAD-systemen, en gebruiken NL/SfB voor het ordenen van informatie van leveranciers. Beheerd door BIM loket. </dd>
* <dfn data lt="ETIM">ETIM</dfn>?<dd>ETIM (Europees Technisch Informatie Model) is een classificatiestandaard om technische producten (internationaal) eenduidig in te delen. Per klasse worden de belangrijkste technische kenmerken vastgelegd. ETIM zorgt voor uniforme productgegevens die probleemloos uitwisselbaar zijn (medium- en fabrikantneutraal). Beheerd door Ketenstandaard.</dd>

### Vocabulaire
Er wordt een vocabulaire ("woordenboek") gemaakt en een taxonomie. De vocabulaire wordt uitgedrukt in SKOS concepten met een voorkeursdefinitie. In de definitie worden de definiërende zaken/eigenschappen meegenomen.

Het woordenboek kan op deze manier worden hergebruikt op een laagdrempelige wijze wat de adaptatie van het kernmodel bespoedigt. 

Iedere definitie krijgt een bronvermelding. Er kunnen meerdere definities aan een concept hangen. Eén van de definities is de voorkeursdefinitie.


### Taxonomie
De Taxonomie wordt opgebouwd uit de concepten van de vocabulaire. De hiërarchie wordt bepaalt door de definitie. De definitie kan worden aangescherpt of aangevuld a.d.h.v. de plek in de taxonomie.

De taxonomie wordt geschreven in rdf/rdfs en niet in skos. Er wordt naar skos concepten verwezen door rdfs:isDefinedBy. De subtypering wordt gedefinieerd door rdfs:subClassOf en niet skos:narrower.

De taxonomie mag multiple inheritance gebruiken. Hoe de definitie wordt uitgeschreven is tijdens de meeting nog een punt van discussie.
De taxonomie is er om te ‘extenden’ en niet om te mappen.

#### Strenge hiërarchie: RDFS
Een van de belangrijkste spelregels in de rdfs hiërarchie is die van Disjoint Classes. Dit wil zeggen dat alle in te delen zaken te verdelen zijn in een van de gedefinieerde classes. Een zaak kan of tot de ene klasse behoren of tot de andere, maar niet tot beiden.
Er zijn meerdere van dit soort indelingen te maken. In de NEN 2660-2 in rdfs vorm gebeurt dat bijvoorbeeld op het niveau van ‘entity’. Een ‘entity’ is te verdelen in bijvoorbeeld een geplande ‘entity’ of een bestaande ‘entity’. Een ‘entity’ kan dus niet beiden zijn.
Je kan een ‘entity’ ook verdelen in een functioneel ding of een technisch ding. Een functioneel ding is een entiteit die een bepaald gedrag vervuld. Het doet er niet toe hoe, het gaat om de functie. Een technisch ding is een ding dat eigenschappen heeft die de functie uitvoert of implementeert. Een entiteit kan dus niet tegelijk een technisch ding zijn en een functioneel ding.
‘Disjoint Classes’ geldt op het niveau waarop ze zijn gedefinieerd en alle niveaus er onder. 
Hieronder de disjoint classes van de NEN 2660:

<figure id="figure">
  <img src="h/media/bronnencb-nl.png" alt="Schematische weergave" />
  <figcaption>De disjoint classes in de NEN 2660-2</figcaption>
</figure>


### Linksets
Nu werd het raamwerk vast hebben gelegd van de bronnen in skos CBNL thesaurus in skos en de CBNL kern model in RDFS, hebben we de links sets gedefinieerd waarin de relaties werden vastgelegd tussen de zojuist genoemde ontologie zo is er een link set tussen het kernmodel en het woordenboek en zijn er meerdere links sets tussen het woordenboek en een bron in skos.

<figure id="figure">
  <img src="h/media/kernmodelenthesaurus.png" alt="Schema"/>
  <figcaption>Van bronnen in SKOS naar thesaurus naar kernmodel</figcaption>
</figure>


### Samenhang
<figure id="figure">
  <img src="h/media/ontologieen.png" alt="Schema"/>
  <figcaption>De opbouw van CB-NL met linksets tussen ontologieën</figcaption>
</figure>

In het plaatje hierboven zijn de verschillende ontologieën en een link sets weergegeven. In de paragrafen hieronder worden de ontologie per stuk besproken en eveneens de regels die We hebben toegepast om te komen tot een bijvoorbeeld eenduidige hiërarchie voor het kern model.





