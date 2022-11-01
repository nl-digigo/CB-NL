# Rijkswaterstaat 


## BIM-Provesy

<dfn data-lt="BIM-Provesy">BIM-Provesy</dfn>: Een Linked Data systeem ontwikkeld voor Rijkswaterstaat voor het centraliseren en koppelen van verhardings-informatie voor rijkswegen. Het systeem bevat valgewichtdeflectiemetingen, (gedetailleerde) boorkernen, garanties, CE informatie asfaltmengsels,  MJPV planningen, inspectie gegevens, KNMI gegevens, rekenresultaten en veel andere datasets. Onderdeel van de informatie stroom is het testen en toetsen van aangeleverde informatie via zogenaamde ‘validators’. Deze validators testen de dataset en produceren een rapportage hiervan.</p>


<figure id="figure">
  <img src="h/media/rws_bimprovesy.PNG" alt="BIM-Provesy" />
  <figcaption>BIM-Provesy</figcaption>
</figure>

 <abbr title="BIM Provesy">BIM-V</abbr> werkt op basis van Linked data en probeert datasets te relateren. Vaak worden datasets op basis van BPS of GPS locaties gerelateerd. Andere relaties zijn weerstation relaties en bijv asfaltmengsel relaties. De objecten en kenmerken zijn grotendeels afkomstig uit de RWS OTL (versie 1.71 met OTL-Provesy objecten). 

## BIM-V uitbreidingen
BIM-V houdt zich aan de Linked data architectuur waarbij databronnen gekoppeld kunnen worden door bijv (her-) gebruik van URI’s of door het leggen van een relatie op basis van een gezamelijke waarde. Extra context en evt extra verrijking vanwege de aanwezigheid van deze context is mogelijk door de data te koppelen aan een netwerk van (gerelateerde) OTL-en.

<figure id="figure">
  <img src="h/media/otl_aanpak.png" alt="Gedistribueerde aanpak OTL's" />
  <figcaption>Gedistribueerde aanpak OTL's</figcaption>
</figure>

<figure id="figure">
  <img src="h/media/boskalis_invulling.png" alt="Invulling OTL en datalandschap door Rijkswaterstaat BIM-Provesy" />
  <figcaption>Invulling OTL en datalandschap door Rijkswaterstaat's BIM-Provesy</figcaption>
</figure>


## POC’s BIM-V en PIM
In 2 Proof-of-concepts is er PIM data omgezet naar Linked Data die zeer makkelijk bruikbaar was binnen [=BIM-Provesy=]. Grofweg zijn de volgende punten aan bod gekomen binnen de POC’s 
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
Linked datasets op basis van een gedragen OTL-PIM/OTL-Wegenbouw kunnen zeer makkelijk in BIM-V geplaatst worden omdat BIM-V gebaseerd is op Linked data. Indien standardisatie van een OTL-PIM/OTL-wegenbouw leidt tot een markt waarbij meerdere partijen data kunnen aanleveren volgens dit formaat lijkt een consistentie opbouw en beheer van gedetailleerde verhardings informatie dichter bij te komen. Een dergelijk model zal wellicht interactie hebben met de BGT en/of [=IMBOR=]. Vooralsnog is RWS zeer geinteresseerd in de haalbaarheid van dit soort oplossingen en participeert vanwege deze interesse in deze use-case om meer zicht hierop te krijgen.
