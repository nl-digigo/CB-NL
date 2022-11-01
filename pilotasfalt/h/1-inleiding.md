# Inleiding

## Praktijkproef 
Het voorliggende praktijkproject is van de provincie Gelderland en Rijkswaterstaat en Boskalis. Het gaat hier om de informatie over asfaltverhardingen op basis van het ‘Pavement Information Model’ (PIM) en van de informatiebehoefte van de opdrachtgevers beschreven in hun <abbr title="objecttypenbibliotheek">OTL</abbr>. Dit document beschrijft de pilot binnen dit project om met behulp van <abbr title="Concepten Bibliotheek Nederland">CB-NL</abbr>2.0 eenvoudiger gegevens te kunnen uitwisselen.

<dfn data-lt="PIM-OTL">PIM-OTL</dfn>: Een wegenbouw informatiemodel ontwikkeld door een aantal grote opdrachtnemers.</p>


## Aanleiding

In april 2021 is het versnellingsproject Kernmodel CB-NL van start gegaan. Het gaat om de aanpassing van [=CB-NL=] aan de [[NEN_2660_2_2022]] Modelleringsregels voor de bouw. De nieuwe inhoud van [=CB-NL=] is opgebouwd uit een topmodel aansluitend op [=NEN-2660-2=] en een aan het topmodel verbonden woordenboek (thesaurus). De spelregels die gebruikt zijn bij het opstellen van CB-NL 2.0 staan in [Spelregels CB-NL 2.0](https://bimloket.github.io/CB-NL/spelregels). 

<dfn data-lt="NEN-2660-2">NEN-2660-2</dfn>: Regels voor informatiemodellering van de gebouwde omgeving, uitgewerkt in een ontologie voor de bouwsector.</p> [[NEN_2660_2_2022]]

<dfn data-lt="CB-NL">CB-NL</dfn>: Standaard voor de gebouwde omgeving, waarmee genavigeerd kan worden tussen standaarden, zoals die van RAW, STABU, NEN, IMGeo, ETIM en Rioned.</p>


## Probleemstelling
Belangrijk onderdeel van de digitalisering is het uitwisselen en delen van informatie. Om dit te kunnen doen zijn veel standaarden ontwikkeld. Deze zijn echter niet consistent met elkaar. Ook binnen organisaties speelt dit probleem. Informatiebronnen zijn moeilijk te verbinden, onder meer door inconsistente semantiek onderling. Daarom zijn vele organisaties zelf informatiemodellen (in de bouwsector bekend als objecttypenbibliotheken "[=OTL=]'s") aan het ontwikkelen, om hun gegevensbehoefte te structureren. Deze [=OTL=]’s verschillen ook weer van elkaar. De problemen die hieruit volgen kosten veel tijd en capaciteit, hetgeen een flinke barrière vormt voor het bereiken van de beoogde versnelling in de sector. 
<br>
<br>
Het is belangrijk om te komen tot een gemeenschappelijke taal. [=CB-NL=] is hiervoor bedoeld, en kan dienen als kernmodel waar andere standaarden aan kunnen verbinden en waarop [=OTL=]’s kunnen aanhaken.
Andere standaarden van BIM-loket en van partners kunnen aansluiten op het kernmodel van CB-NL. Organisaties die een dergelijke basis-OTL volgen hoeven dus niet meer zelf te modelleren wat er in de sector is afgesproken. We verwachten dat de gegevensuitwisseling hierdoor gemakkelijker wordt en minder fouten oplevert.
Het draagt in hoge mate bij aan een gestandaardiseerde manier van uitwisselen van digitale informatie en het voorkomen van informatieverlies tussen opdrachtgevers en opdrachtnemers. De use cases waarvoor CB-NL potentieel geschikt is staan in <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>.
<br>
<br>
<dfn data-lt="OTL">OTL</dfn>: Object Type Library (en) of Objecttypenbibliotheek (nl). Term die in de bouwsector gebruikt wordt en een specialisatie is van een <a>Ontologie</a>.</p>
<dfn data-lt="ontologie|ontologieën">Ontologie</dfn>: Een kennismodel van een specifiek kennisdomein in de werkelijkheid. Bevat een set regels, die gebruikt kunnen worden om extra kennis af te leiden uit gelinkte data. Met behulp van zo'n model kunnen computers begrijpen wat de data betekent en redeneren over data. </p>


## Doel
Het doel is om aan te tonen dat je door het koppelen van de [=OTL=]’s van verschillende bij het project betrokken organisaties aan het Kernmodel CB-NL, een betere informatie-uitwisseling kan bewerkstelligen: minder handwerk en minder fouten. Dit doel sluit aan op scenario 5 van [=CB-NL=].

Om de meerwaarde van de ontwikkeling van het Kernmodel CB-NL aan te tonen zijn twee praktijkprojecten geselecteerd. Toetsing (verificatie en validatie) van het projectresultaat is gedaan om de uitwisseling met behulp van een [=OTL=] gekoppeld aan [=CB-NL=] te testen in de praktijk. De Klankbordgroep is bij de start van de pilot en tijdens het project geconsulteerd over de aanpak. Op deze manier hebben we geborgd dat de keuzen in het project aansluiten bij wat in de markt gerealiseerd kan worden. In dit praktijkproject willen we laten zien welke voordelen het bij uitwisseling oplevert als we (data)koppelingen kunnen leggen via CB-NL.

<aside class="note" title="Scenario 5: Areaalgegevens uitwisselen">
Ik wil areaalgegevens en/of bouwwerkgegevens kunnen uitwisselen tussen twee partijen met elk een eigen OTL op basis van CB-NL. Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>
</aside>

## Methoden
Om data vanuit verschillende bronnen aan elkaar te koppelen zijn diverse wegen te bewandelen:
1. Data koppelen op basis van geografische locatie (o.b.v. gis).
2. Data koppelen op basis van een directe semantische mapping tussen twee modellen.
3. Data koppelen door vanuit de bronnen een semantische mapping te leggen naar een referentiemodel (CB-NL) en vervolgens deze koppelingen te volgen.
4. Vertalen overbodig maken door geïntegreerd model te maken.
<br>
<br>
In het project zijn vooral methode 1 en 2 toegepast.




