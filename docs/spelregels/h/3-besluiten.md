# Ontwerpbeslissingen

## Bronnen CB-NL 2.0
De volgende bronnen zijn als input gebruikt voor CB-NL 2.0:
* ABDL (RWS)
* Vorige CB-NL
* IFC
* NEN 2767-4
* NLCS
* IMBOR
* IMGEO
* GWSW
* NEN 3610
* PIM
* Aquo?
* NL-SfB?

### Bronnen 
De bronnen zijn eerst in een linked data vorm gegoten als ze dat nog niet waren. Vanwege de verschillende vormen en indelingen van de bronnen, is er gekozen om de bronnen in skos vast te leggen. Een linked data vorm die veel vrijheid geeft en meerdere hiërarchieën versimpelt naar de skos:broader en skos:narower opdeling.


## Het Woordenboek
Voor iedere bron heeft de specialist of ervaringsdeskundige een selectie van concepten gemaakt voor opname In het woordenboek en voor opname In het kern model. Zo ontstond er een brede selectie aan concepten uit verschillende bronnen In de basis vormde voor het CBNL woordenboek in skos. Er is dankbaar gebruik gemaakt van de zeer rijk gevulde ABDL Van Rijkswaterstaat. In de ABDL zijn veel concepten al opgenomen met Definitie inclusief bronvermelding. Daarnaast is er al een voorkeur aangegeven Als het mogelijk was voor de definitie die gebruikt zou worden In de ABDL. Hieronder is het voorbeeld gegeven van brug In de ABDL.

<figure id="figure">
  <img src="h/media/brugabdl.png" alt="Screenshot van applicatie" />
  <figcaption>Een brug in de ABDL</figcaption>
</figure>


## Het Kernmodel
Het kernmodel begon met de NEN 2660 in RDFS. Om te komen van discreet object naar brug zijn er concepten gedefinieerd om de hiërarchie aan te vullen. Deze concepten komen uit bijvoorbeeld de ABDL of IFC of een van de talloze andere topologieën. Maar voordat deze concepten werden gedefinieerd werd er voorgesorteerd op de geselecteerde concepten uit de bronnen voor het kern model.


## Linksets
Nu werd het raamwerk vast hebben gelegd van de bronnen in skos CBNL thesaurus in skos en de CBNL kern model in RDFS, hebben we de links sets gedefinieerd waarin de relaties werden vastgelegd tussen de zojuist genoemde ontologie zo is er een link set tussen het kernmodel en het woordenboek en zijn er meerdere links sets tussen het woordenboek en een bron in skos.

<figure id="figure">
  <img src="h/media/kernmodelenthesaurus.png" alt="Schema" />
  <figcaption>Van bronnen in SKOS naar thesaurus naar kernmodel</figcaption>
</figure>


## Opbouw CB-NL

<figure id="figure">
  <img src="h/media/ontologieen.png" alt="Schema" />
  <figcaption>De opbouw van CB-NL met linksets tussen ontologieën</figcaption>
</figure>

In het plaatje hierboven zijn de verschillende ontologieën en een link sets weergegeven. In de paragrafen hieronder worden de ontologie per stuk besproken en eveneens de regels die We hebben toegepast om te komen tot een bijvoorbeeld eenduidige hiërarchie voor het kern model.

## Invulling kernmodel
De selectie voor het kernmodel: van NEN 2660-2 naar CBNL onderste concepten

## Strenge hiërarchie: RDFS
Een van de belangrijkste spelregels in de rdfs hiërarchie is die van Disjoint Classes. Dit wil zeggen dat alle in te delen zaken te verdelen zijn in een van de gedefinieerde classes. Een zaak kan of tot de ene klasse behoren of tot de andere, maar niet tot beiden.
Er zijn meerdere van dit soort indelingen te maken. In de NEN 2660-2 in rdfs vorm gebeurt dat bijvoorbeeld op het niveau van ‘entity’. Een ‘entity’ is te verdelen in bijvoorbeeld een geplande ‘entity’ of een bestaande ‘entity’. Een ‘entity’ kan dus niet beiden zijn.
Je kan een ‘entity’ ook verdelen in een functioneel ding of een technisch ding. Een functioneel ding is een entiteit die een bepaald gedrag vervuld. Het doet er niet toe hoe, het gaat om de functie. Een technisch ding is een ding dat eigenschappen heeft die de functie uitvoert of implementeert. Een entiteit kan dus niet tegelijk een technisch ding zijn en een functioneel ding.
‘Disjoint Classes’ geldt op het niveau waarop ze zijn gedefinieerd en alle niveaus er onder. 
Hieronder de disjoint classes van de NEN 2660:

<figure id="figure">
  <img src="h/media/bronnencb-nl.png" alt="Schematische weergave" />
  <figcaption>De disjoint classes in de NEN 2660-2</figcaption>
</figure>

Zo zijn er nog meer regels die hierna kort worden behandeld.

## Keuze van definitie
In het kernmodel worden alleen concepten opgenomen met een eenduidige definitie. We nemen als voorbeeld weer brug die meedere definities heeft. De ABDL heeft ze al keurig ingedeeld en een voorkeursdefinitie aangegeven. In dit geval, zoals de meeste, is de voorkeursdefinitie opgenomen. Soms is het overduidelijk welke definitie het beste is en soms niet. Hiervoor is niet een goede richtlijn te geven, anders dan dat de definitie goed gevormd moet zijn. Dit wil zeggen dat de definitie niet een voorbeeld is, of het concept herhaalt om het te beschrijven.

<figure id="figure">
  <img src="h/media/abdldoorgestreept.png" alt="Visualisatie werkproces" />
  <figcaption>Van ABDL naar definities in CB-NL</figcaption>
</figure>
