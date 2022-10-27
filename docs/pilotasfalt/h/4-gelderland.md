# Gelderland 


## OTL Gelderland
Gelderland heeft een eigen OTL. In OTL-Gelderland is de informatiebehoefte van de provincie beschreven in de vorm van een verzameling objecttypes, eigenschappen, relaties tussen objecttypes en waardenlijsten. Objecttypes zijn ingedeeld rondom de verschillende provinciale ‘disciplines’ (Verhardingen, Groen, Elektrotechnische Installaties, Water, Faunavoorzieningen, Wegmeubilair). OTL-Gelderland vormt de basis voor de inrichting van de provinciale beheermanagementsystemen en het datamodel dat gebruikt wordt bij het uitwisselen van data tussen de provincie en haar opdrachtnemers. 
OTL-Gelderland wordt op dit moment beheerd in Relatics. De modellering in de laatst gepubliceerde versie (1.9) en de deze zomer gepubliceerde versie 1.10 is zoveel mogelijk gebaseerd op [=IMBOR=] 2020-01 en IMGeo 2.1. Voor verhardingen zijn hier een aantal objecttypes toegevoegd die de verschillende soorten constructielagen voorstellen. Zie figuur 4 voor het informatiemodel rondom de discipline ‘Verhardingen’. In toekomstige versies van OTL-Gelderland zal de modellering conform OTL-PIM plaatsvinden.


<figure id="figure">
  <img src="h/media/gelderland_otl.png" alt="boomstructuur" />
  <figcaption>De OTL van Gelderland</figcaption>
</figure>

## Werkzaamheden

### Data preparatie
De volgende datasets zijn vertaald naar Linked Data:

|  #  |  Wat  |  Kenmerken  |  OTL  |
|-----|-----|-----|-----|
|  1  |	Wegvakken dataset van de provincie gelderland  |  Geosparql/WKT*  |  OTL-GLD (COINS2 versie)  |
|  2  |  Asfaltplakken GIS  |  Geosparql/WKT  |  OTL-PIM  |
|  3  |  Witos data  |  Geosparql/Wkt  |  OTL-PIM-Witos  |
|  4  |  PIM data  |  Vanuit SQL database  |  OTL-PIM  |  

*WKT staat voor Well Known Text. WKT is een GIS formaat en kan dus geometrie beschrijvingen opslaan. GeoSparql bestaat uit een ontologie om o.a. WKT strings te duiden en breidt Sparql verder uit met enkele basis GIS operaties.


### Data typering
De wegvakken uit de dataset van Gelderland zijn getypeerd volgens de OTL-GLD. 

<figure id="figure">
  <img src="h/media/data_gelderland.png" alt="Screenshot van applicatie" />
  <figcaption>De wegvakken uit de dataset van Gelderland zijn getypeerd volgens de OTL-GLD. </figcaption>
</figure>

De GIS data (wegvakken) van de provincie is vertaald naar Linked Data en is gekoppeld aan de OTL. Dat wil zeggen dat elk object direct gekoppeld is via rdf:type met een Class uit de OTL. Al deze data is in Ontotext GraphDB gezet. Zie screenshot hieronder.

<figure id="figure">
  <img src="h/media/gisdata_gelderland.png" alt="Screenshot van applicatie" />
  <figcaption>De GIS data (wegvakken) van de provincie is vertaald naar Linked Data en is gekoppeld aan de OTL</figcaption>
</figure>

### PIM data verwerken
In verschillende P.O.C. is er PIM data via Excelsheets vertaald naar Linked Data. In deze case is er direct toegang gekregen tot de SQL databases van PIM. Het betreft hier een subset van alle tabellen. In deze POC is data zoveel mogelijk direct uit deze tabellen gehaald. Daarnaast zijn er Witos en GIS gegevens aangeleverd. Al deze bronnen zijn vertaald naar Linked data conform de eerder genoemde PIM-OTL. Zie screenshot hieronder. 


<figure id="figure">
  <img src="h/media/pim_data_gelderland.png" alt="Screenshot van applicatie" />
  <figcaption>De verwerking van PIM data</figcaption>
</figure>


In deze OTL zijn alle klasses en relaties te vinden. Elk object in PIM heeft een directe relatie met een klasse uit de OTL-PIM. Tevens zijn objecten verbonden aan elkaar. Zo is in de OTL-browser te zien dat een Wegvak verbonden kan worden met bijvoorbeeld LosLocaties, Temperaturen, etc. Deze structuren zijn weer terug te vinden in de triplestore waar zowel de datasets als ook de OTL opgeslagen is. Zie hieronder een screenshot van GraphDB waarin een wegvak uit PIM centraal staat met de kenmerken rechts in het kenmerken scherm en tevens de verbindingen te zien is met andere resources.

<figure id="figure">
  <img src="h/media/pim_viewer_gelderland.png" alt="Screenshot van applicatie" />
  <figcaption>De viewer van Gelderland op de PIM OTL</figcaption>
</figure>

### Visualisatie van de Linked Data

Naast de standaard visualisatie van bijvoorbeeld GraphDB is de data natuurlijk ook op de kaart te presenteren vanwege de aanwezigheid van WKT strings in de dataset. In een demonstratietool zijn deze datasets toonbaar gemaakt zoals de dataset van de provincie Gelderland, zie screenshot. 
Zie ook:  [https://connectedapps.nl/projects/cbnl/pim/cbnl-pim-gld-showcase-(versie-0.9.4)/](https://connectedapps.nl/projects/cbnl/pim/cbnl-pim-gld-showcase-(versie-0.9.4)/)


<figure id="figure">
  <img src="h/media/visualisatie_wegdata_gelderland.png" alt="Screenshot van applicatie" />
  <figcaption>De visualisatie van linked datasets van wegen van Gelderland</figcaption>
</figure>

Maar ook de dataset vanuit PIM kan op vergelijkbare manieren zichtbaar gemaakt worden. Hieronder een screenshot van de demonstratietool waarbij de aanleg temperaturen zichtbaar worden gemaakt van een wegvak. Door een wegvak te selecteren worden de temperaturen over de breedte van de weg opgehaald en in een grafiek gezet. 

<figure id="figure">
  <img src="h/media/visualisatie_pimdata_gelderland.png" alt="Screenshot van applicatie" />
  <figcaption>De GIS visualisatie van linked datasets van wegen vanuit PIM data</figcaption>
</figure>

<figure id="figure">
  <img src="h/media/visualisatie_pimdata_gelderland2.png" alt="Screenshot van applicatie" />
  <figcaption>De luchtfoto visualisatie van linked datasets van wegen vanuit PIM data</figcaption>
</figure>

<figure id="figure">
  <img src="h/media/pim-asfalt-voorbeeld.png" alt="Screenshot van applicatie" />
  <figcaption>Gedetailleerde Asfalt gegevens vanuit PIM</figcaption>
</figure>

### Koppelen van de data


#### Koppeling wegvakken-PIM
De wegvakken van de provincie Gelderland zijn via een relatie met de naam “bevatPIMWegvak” gekoppeld aan de PIM data (zo is een koppeling ontstaan conform hoofdstuk 4, methode 2). Zie onderstaande screenshot voor een voorbeeld dataset van 1 wegvak (provincie Gelderland) dat gekoppeld is aan een PIM Wegvak.

<figure id="figure">
  <img src="h/media/koppeling_gelderland_pimdata.png" alt="Screenshot van applicatie" />
  <figcaption>De koppeling van PIM data aan Gelderse wegvakken</figcaption>
</figure>

Deze relatie is voor deze demonstratie gelegd op basis van een GIS overlap analyse (hoofdstuk 4, methode 1). Deze kan makkelijk door Geosparql geimplementeerd worden. Beter zou natuurlijk een centrale wegennet Linked dataset zijn waar zowel de provincie Gelderland als ook PIM naar refereert of herbruikt (datakoppeling methode 3)
Met de relatie is het mogelijk om data van de provincie Gelderland te laten zien (de wegvakken) die een koppeling hebben naar PIM data. Hieronder een screenshot van wegvakken van de provincie Gelderland waarbij het geselecteerde wegvak een relatie heeft naar een PIM wegvak dat vervolgens verbonden is met aanleg-gegevens,  loslocaties, etc. Tevens zijn de asfaltmengsels uit PIM gebruikt om de wegvakken van Gelderland te voorzien van een kleurcodering. Ook worden de aanleg temperaturen (Witos) in de grafiek getoond voor een Wegvak (Gelderland).

<figure id="figure">
  <img src="h/media/visualisatie_koppeling_gelderland_pimdata.png" alt="Screenshot van applicatie" />
  <figcaption>De koppeling van PIM data aan Gelderse wegvakken</figcaption>
</figure>

Naast deze visualisatie is het ook mogelijk om deze datasets te bevragen via Sparql. 

<figure id="figure">
  <img src="h/media/sparql-queries_gelderland.png" alt="Screenshot van applicatie" />
  <figcaption>Het zoeken in de wegdata met sparql-queries</figcaption>
</figure>

### Koppeling CB-NL
De koppeling naar de CB-NL is minimaal uitgewerkt. Het concept Asfaltmengsel uit de CB-NL kent 2 versies: RDFS Asfaltmengsel en een Skos versie. Deze zijn verbonden aan elkaar. Zie onderstaande screenshot.

<figure id="figure">
  <img src="h/media/cbnl-koppeling_gelderland.png" alt="Screenshot van applicatie" />
  <figcaption>Koppelen van de gelderse OTL aan CB-NL</figcaption>
</figure>

Ook PIM kent asfaltmengsel en deze is via skos:related gekoppeld aan de CB-NL versie. Hiermee is het mogelijk om bijvoorbeeld beschrijvingen vanuit de CB-NL te hergebruiken voor PIM. Door deze koppeling kan er nu ook andere gerelateerde PIM concepten gevonden worden uit de PIM-OTL. In het volgende screenshot is het bolletjes diagram verder uitgebreid met PIM OTL concepten.

<figure id="figure">
  <img src="h/media/cbnl-koppeling_pim.png" alt="Screenshot van applicatie" />
  <figcaption>Koppelen van de PIM OTL aan CB-NL</figcaption>
</figure>

## Uitwisseling in de praktijk
Hoewel Linked Data een mooie manier is om data te delen of wellicht gewoon te gebruiken zonder dat je echt kunt spreken van delen (data bij de bron) is uitwisseling van data nog steeds zeer wenselijk. Een dergelijke uitwisseling (bv. met ICDD) vergt natuurlijk kennis van Linked Data en het is zeer wenselijk dat er een rijk software ecosysteem aanwezig is voor het verwerken van deze informatie. Dit is op moment van schrijven van dit document niet helemaal aanwezig. Vandaar dat de provincie Gelderland de PIM informatie wil ontvangen in een zogenaamde Geopackage formaat waarbij naast GIS data ook relaties naar (niet) Gis objecten gecommuniceerd kan worden.
Voor dit doel is een geopackage export gemaakt waarbij de PIM data gexporteerd wordt. Ook Niet-gis objecten zoals Asfaltmengsels en MonsterLagen worden in deze package geëxporteerd. Relaties worden geschreven opdat deze passen in een Geopackage dat lukt voor “1:n” relaties. 
Hieronder een screenshot van QGIS waarbij de geopackage file is geladen. 

<figure id="figure">
  <img src="h/media/geopackage_qgis.png" alt="Screenshot van applicatie" />
  <figcaption>Een screenshot van QGIS waarbij de geopackage file is geladen</figcaption>
</figure>

Ook niet GIS data kan op deze manier overgedragen worden. Hieronder is een screenshot te zien van een boorkernlaag. Deze boorkernlaag heeft geen GIS info maar hoort bij een Boorkern. De uri van de Boorkern is te vinden via het kenmerk parentID. 

<figure id="figure">
  <img src="h/media/boorkern_koppeling.png" alt="Screenshot van applicatie" />
  <figcaption>Een screenshot van QGIS waarbij de niet-geografische informatie over een boorkern gevonden kan worden</figcaption>
</figure>

Naast de koppeling met een Boorkern is er ook nog een relatie met een asfaltmengsel. Deze gaat via asfaltmengselID.


