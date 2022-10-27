# Ontwerpbeslissingen

## Bronnen

### Bronvertaling
De bronnen zijn eerst in een linked data vorm gegoten als ze dat nog niet waren. Vanwege de verschillende vormen en indelingen van de bronnen, is er gekozen om de bronnen in skos vast te leggen. Een linked data vorm die veel vrijheid geeft en meerdere hiërarchieën versimpelt naar de skos:broader en skos:narower opdeling.


### Selectie uit bronnen
Voor iedere bron heeft de specialist of ervaringsdeskundige een selectie van concepten gemaakt voor opname In het woordenboek en voor opname In het kern model. Zo ontstond er een brede selectie aan concepten uit verschillende bronnen In de basis vormde voor het CBNL woordenboek in skos. Er is dankbaar gebruik gemaakt van de zeer rijk gevulde ABDL Van Rijkswaterstaat. In de ABDL zijn veel concepten al opgenomen met Definitie inclusief bronvermelding. Daarnaast is er al een voorkeur aangegeven Als het mogelijk was voor de definitie die gebruikt zou worden In de ABDL. Hieronder is het voorbeeld gegeven van brug In de ABDL.

<figure id="figure">
  <img src="h/media/brugabdl.png" alt="Screenshot van applicatie"/>
  <figcaption>Een brug in de ABDL</figcaption>
</figure>


## Taxonomie

### Inhoud
De basis van de taxonomie is de [[NEN_2660_2_2022]] in RDFS. Om te komen van discreet object naar brug zijn er concepten gedefinieerd om de hiërarchie aan te vullen. Deze concepten komen uit bijvoorbeeld de [=ABDL=] of [=IFC=] of een van de talloze andere topologieën. Maar voordat deze concepten werden gedefinieerd werd er voorgesorteerd op de geselecteerde concepten uit de bronnen voor de taxonomie van CB-NL.


### Definitiekeuze
In het kernmodel worden alleen concepten opgenomen met een eenduidige definitie. We nemen als voorbeeld weer brug die meedere definities heeft. De ABDL heeft ze al keurig ingedeeld en een voorkeursdefinitie aangegeven. In dit geval, zoals de meeste, is de voorkeursdefinitie opgenomen. Soms is het overduidelijk welke definitie het beste is en soms niet. Hiervoor is niet een goede richtlijn te geven, anders dan dat de definitie goed gevormd moet zijn. Dit wil zeggen dat de definitie niet een voorbeeld is, of het concept herhaalt om het te beschrijven.

<figure id="figure">
  <img src="h/media/abdldoorgestreept.png" alt="Visualisatie werkproces" />
  <figcaption>Van ABDL naar definities in CB-NL</figcaption>
</figure>

Wat in het kernmodel wordt opgenomen is het concept ‘brug’ met één definitie met apart de bronvermelding.


### Positie in hiërarchie
Nadat de definitie is bepaald, en dit kan een iteratief proces zijn met deze stap, zeker als er meerdere concepten op eenzelfde niveau komen, wordt aan de hand van de definitie en de definities van de concepten uit de bestaande hiërarchie, een positie bepaald. Nu de positie bekend is, wordt de definitie herschreven zodanig dat het zijn positie in de hiërarchie bevestigt. Dit gebeurt door het supertype op te nemen in de definitie. Zo is de definitie van stichting herschreven van “door een rechtshandeling in het leven geroepen rechtspersoon, welke geen leden kent en beoogt met behulp van een daartoe bestemd vermogen een in de statuten vermeld doel te verwezenlijken.” naar “door een rechtshandeling in het leven geroepen privaatrechtelijke organisatie (rechtspersoon), welke geen leden kent en beoogt met behulp van een daartoe bestemd vermogen een in de statuten vermeld doel te verwezenlijken. Dit omdat privaatrechtelijke organisatie het supertype is. Je ziet dat de definitie specifieker wordt.

<figure id="figure">
  <img src="h/media/taxonomie.png" alt="Boomdiagram" />
  <figcaption>De hiërarchie van de taxonomie</figcaption>
</figure>


Hier zie je het concept stichting in de strenge hiërarchie op basis van zijn definitie. Voor de volledigheid hier ook de definities van een privaatrechtelijke organisatie, een formele organisatie en een organisatie:
* Een organisatie is een Discrete object bestaande uit één persoon of groep van personen die zijn eigen functies heeft met verantwoordelijkheden, bevoegdheden en relaties om zijn doelstellingen te bereiken.
* Een formele organisatie is een organisatie die in het leven wordt geroepen door een formele publiek- of privaatrechtelijke handeling, en die de rol van rechtspersoon kan spelen.
* Een privaatrechtelijke organisatie is een formele organisatie die in het leven wordt geroepen door een formele privaatrechtelijke handeling, zoals een notariële akte.


### Rollen
Om het fenomeen rol te illustreren nemen we een persoon, zij is een vrouw en getrouwd met een man (voor het voorbeeld houden we het hier traditioneel). Zij is zwanger en wordt moeder en hij wordt de (biologische) vader. Het kind wordt geboren en als het vijfentwintig is overlijdt de man. De vrouw is weduwe.
<br><br>
Als we proberen een hierarchie van een persoon te maken op basis van het bovenstaande beginnen we bij persoon. Er zijn twee “disjoint” subklassen, man en vrouw. Je kan ook twee “disjoint” klassen onderscheiden namelijk echtgenote en echtgenoot. En nog twee paar “disjoint” klassen, namelijk vader en moeder plus weduwnaar en weduwe. 
<br><br>
Wat je ziet is dat een persoon, biologisch gezien, geboren wordt als man of vrouw, bepaald door het DNA. Pas op het moment dat twee mensen gaan trouwen worden ze echtgenoot en echtgenote. En pas als er een kind komt zijn ze vader en moeder. Als het huwelijk strandt of een van de twee komt te overlijden, is de ander geen echtgeno(o)t(e) meer. Vader en moeder, echtgenoot en echtgenote, weduwe en weduwnaar, zijn tijdelijke benoemingen van een natuurlijk persoon, terwijl, biologisch gezien, man en vrouw, permanente benoemingen zijn van een persoon.
<br>
<br>
Naast dit voorbeeld zijn er talloze andere voorbeelden van dingen die bepaalde permanente kenmerken hebben wat ze maken tot war ze zijn. Voor mens gemaakte objecten, artefacten, is dat het doel van het object, de rede waarom het gemaakt is met die specifieke eigenschappen. In een boekhoudsysteem wordt onderscheid gemaakt tussen crediteuren en debiteuren, dat wil niet zeggen dat als je voorkomt in het ene lijstje, je niet voor kan komen in het andere lijstje. Debiteuren en crediteuren zijn rollen.
<br><br>
Het is daarom heel belangrijk om onderscheid te maken tussen een individueel object en de rol die het vervult. Rol is geïntroduceerd in de CBNL als subtype van Functionele entiteit met de definitie: Functional entity die wordt ingevuld door een individueel object in een activitiet of feit. Direct eronder zijn de volgende rollen onderscheiden:

<figure id="figure">
  <img src="h/media/rollen.png" alt="Boomdiagram" />
  <figcaption>Rollen in de taxonomie</figcaption>
</figure>

Materiaal heeft als definitie: Materiaal is een rol (of toepassing) van een chemische stof in een bepaalde context. De subtypen van materiaal verklaren de keuze verder. Er dient goed onderscheid gemaakt te worden tussen rollen en echte objecten.

## Klant-eis voorbeeld

## Nog niet geclassificeerde concepten


## DE THESAURUS

### Losse hiërarchie: NEN 2660-2 in skos
### Compleet mogelijk
### Nog niet geclassificeerde concepten

## Linkset thesaurus <> taxonomie

Ieder concept uit het kernmodel dat niet onder nog te classificeren valt en dat een oorsprong heeft in één of meerdere bronnen moet traceerbaar zijn naar de bron. De route naar de bron loopt van het kernmodel via de thesaurus naar een bron in skos. Deze linkset is de linkset tussen het kernmodel en de thesaurus en bevat de linksoort: rdfs:isDefinedBy. Deze verbindt het concept uit het kernmodel met het gelijkluidende concept uit de thesaurus. In Turtle ziet het er zo uit voor het concept sluis:

<code>cbnl-def:sluis rdfs:isDefinedBy cbnl-term:sluis ;.</code>

Voor een completer beeld is hieronder weergegeven hoe het thesaurus concept in cbnl-def: is uitgebreid met een link naar het concept in de thesaurus cbnl-term:.

<code>cbnl-def:sluis
  rdf:type rdfs:Class ;
  rdfs:subClassOf cbnl-def:bouwwerk_geen_gebouwzijnde ;
  dct:created "2021-06-30T09:00:00.000Z"^^xsd:dateTime ;
  dct:modified "2021-06-30T09:00:00.000Z"^^xsd:dateTime ;
  dct:references "CROW 156" ;
  rdfs:comment "none" ;
  rdfs:isDefinedBy cbnl-term:sluis ;
  skos:altLabel "sluice"@en ;
  skos:definition "bouwwerk, geen gebouw zijnde met een beweegbare waterkering, die de verbinding vormt tussen twee wateren met verschillende waterstanden."@nl ;
  skos:prefLabel "lock"@en ;
  skos:prefLabel "sluis"@nl ;
  cbnl-def:state "proposed" ;
  cbnl-def:stateComment "eerste iteratie" ;
  cbnl-def:stateDate "2021-06-30"^^xsd:date ;</code>
.
Voor de leesbaarheid zijn niet de GUID’s weergegeven maar de namen van de skos:prefLabel.


## Bronnen in SKOS
De bronnen zoals bibliotheken, CAD lagen, standaarden en lijsten, zijn in verschillende maten uitgegeven. Om ze bruikbaar te maken voor de CBNL zijn ze omgezet in linked data in skos vorm. Dit is gedaan met behulp van de specialisten en ervaringsdeskundigen in het team.
Eenmaal in skos vorm, kan er naar een concept worden verwezen, gelinked, in dezelfde taal als de bron is geschreven. Hierdoor is het geheel digitaal ondersteund. De llinks die gelegd moesten worden zijn de links van het CBNL woordenboek naar de bron. Deze selectie is gemaakt door de specialisten en ervaringsdeskundigen. Er zijn twee soorten links gebruikt:

## Linkset thesaurus <> bronnen


