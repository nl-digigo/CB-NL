# Inleiding

## Aanleiding
De Concepten Bibliotheek Nederland, oftewel de CB-NL, was nodig toe aan een upgrade. De oorspronkelijke bibliotheek had alle kenmerken van een organisch en in de tijd ontstane bibliotheek. Met de komst van de [[NEN_2660_2_2022]] presenteerde zich de gelegenheid de CB-NL te upgraden naar het nieuwe ‘upper ontology’ van de [[NEN_2660_2_2022]]. De beheerders van de CB-NL kregen de opdracht de hiërarchie van de [[NEN_2660_2_2022]] uit te breiden, extenden, met concepten uit de CB-NL, tot het niveau dat er herkenbare concepten voor de sector in stonden. Met andere woorden, voeg concepten toe zodat de hiërarchie wordt uitgebreid van ‘Discrete object’ van de [[NEN_2660_2_2022]] naar ‘sluis’ van de CB-NL.
Over de plaats in de hiërarchie van de CB-NL objecten mocht geen discussie zijn. Dit betekent dat we een beperkte diepte in de hiërarchie konden halen, voor we op concepten kwamen waar nog discussie over is in de sector.
Daarnaast was er een andere eis die stelt dat iedere term in de CB-NL moest staan. Dit is in strijd met de eerste eis dat er geen discussie mag zijn over de plaats in de hiërarchie en dat er dus een beperkt aantal concepten in de CB-NL kunnen voorkomen.
We hebben gekozen voor een praktische oplossing. We komen met twee ontologieën, te weten een woordenboek met zoveel mogelijk concepten met minimaal één definitie in een losjes gedefinieerde hiërarchie. En een kernmodel met een beperkte set concepten met maximaal één definitie opgehangen in een strikte hiërarchie die gebaseerd is op een eenduidige onderverdeling van een concept in specifiekere concepten op basis van de definitie, met een maximale diepte van een concept dat herkenbaar is voor de sector.


<dfn data-lt="NEN-2660-2" class="lint-ignore">NEN-2660-2</dfn>: Regels voor informatiemodellering van de gebouwde omgeving, uitgewerkt in een ontologie voor de bouwsector.</p> [[NEN_2660_2_2022]]

<dfn data-lt="CB-NL" class="lint-ignore">CB-NL</dfn>: Standaard voor de gebouwde omgeving, waarmee genavigeerd kan worden tussen standaarden, zoals die van RAW, STABU, NEN, IMGeo, ETIM en Rioned.</p>


## Ontwikkelingstraject
De beheerders van de CB-NL werd uitgebreid met specialisten in een bepaald domein. Daarnaast is er gebruik gemaakt van bibliotheken en standaarden geldend in de sector. Denk aan de [=NEN 2767-4=], de [=NL-SfB=], [=NLCS=], [=ETIM=], [=IFC=], maar ook [=IMGeo=] en de [=ABDL=] van Rijkswaterstaat.

De CB-NL bestaande uit het woordenboek en het kernmodel is door het bovengenoemde team verwezenlijkt. Hiervoor zijn werkafspraken gemaakt en regels voor het Kernmodel, het Woordenboek en de referentie naar eventuele bronnen. Dit rapport met spelregels is de weergave van de aanpak en spelregels die gehanteerd zijn en vormt een basis voor het beheer van de CB-NL.

## Status CB-NL 2.0
BIM loket beschouwt de huidige versie 2.0 van CB-NL als een beta versie, bedoeld om mee te experimenteren en te toetsen of de use cases die in [dit document] staan, ondersteund kunnen worden en wat daarvoor nodig is. CB-NL is nog niet gemaakt vanuit een samenwerking met alle standaarden die erin verwerkt zijn, maar vanuit een klein team. Daarom is CB-NL nog niet geschikt voor grootschalige implementatie.

## Aanpak
Naast de bestaande CB-NL zijn er de genoemde woordenboeken, conceptbibliotheken, modellen en standaarden in de sector. Niet alle concepten met dezelfde naam hebben dezelfde definitie, laat staan dezelfde hiërarchische indeling. Van de bronnen is een selectie gemaakt die in het kernmodel zou worden opgenomen en een bredere selectie die in het woordenboek kon worden opgenomen. En al die tijd is de relatie van het concept naar zijn oorsprong vastgehouden. Dit werd vastgelegd in links. De links werden gebundeld in een set. Zo zijn er meerdere ontologieën ontstaan die met elkaar gerelateerd zijn en veel concepten zijn traceerbaar.

<figure id="figure">
  <img src="h/media/trechter.png" alt="Schematische weergave" />
  <figcaption>Visualisatie van het samenbrengen van standaarden in CB-NL</figcaption>
</figure>

De bronnen die gebruikt zijn In het CB-NL waren er vele vormen. Sommigen al in link data andere in tabelvorm weer anderen PDF vorm. Voor iedere bron hadden we een ervaringsdeskundige of een specialist die de bron kon voorbereiden voor opname In de CB-NL.

<figure id="figure">
  <img src="h/media/bronnencb-nl.png" alt="Schematische weergave" />
  <figcaption>Visualisatie van NEN 2660-2 als bron voor CB-NL</figcaption>
</figure>


<dfn data-lt="OTL">OTL</dfn>: Object Type Library (en) of Objecttypenbibliotheek (nl). Term die in de bouwsector gebruikt wordt en een specialisatie is van een <a>Ontologie</a>.</p>
<dfn data-lt="ontologie|ontologieën">Ontologie</dfn>: Een kennismodel van een specifiek kennisdomein in de werkelijkheid. Bevat een set regels, die gebruikt kunnen worden om extra kennis af te leiden uit gelinkte data. Met behulp van zo'n model kunnen computers begrijpen wat de data betekent en redeneren over data. </p>
