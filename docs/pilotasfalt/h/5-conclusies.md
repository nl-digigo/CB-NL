# Conclusies en aanbevelingen

De conclusies en aanbevelingen volgen de scenario's voor potentiële use case van CB-NL <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>.

## Scenario 1: Woordenboek
* CB-NL kan leverancier zijn van definities die relevant zijn voor de gebruiker. 
* OTL-PIM begint met diepgaandere decomposities waar OTL-GLD ophoudt. Een simpele ‘relatie’ tussen OTL-GLD wegvakken en PIM-OTL wegvakken kan snel meerwaarde opleveren bij oplevering van bouwende partij naar beherende partij. In het voorliggende voorbeeld lijkt het raakvlak tussen de OTL's te liggen op het concept "wegvak". Dit zou kunnen worden toegevoegd aan CB-NL 2.0

## Areaalgegevens uitwisselen 
<aside class="note" title="Scenario 5: Areaalgegevens uitwisselen">
Ik wil areaalgegevens en/of bouwwerkgegevens kunnen uitwisselen tussen twee partijen met elk een eigen OTL op basis van CB-NL. Bron: <a href="https://bimloket.github.io/CB-NL/usecases">Use cases CB-NL</a>
</aside>


### Datasets vertalen naar LinkedData

1. Het is eenvoudig uitvoerbaar om 2D GIS en andere datasets te vertalen naar Linked Data.
2. Vertalen van datasets naar LD kan grotendeels zonder een OTL
3. Een OTL kan meer context geven aan de data zoals beschrijvingen, definities, en cardinaliteiten op kenmerken en relaties.

### Vertalen "bouwdata" naar "beheerdata"

5. Theoretisch lijkt het handig om een OTL-Wegenbouw te hebben waarbij de beheer-view en de wegenbouw-view vertegenwoordigd is inclusief conditiemetingen opdat de gehele sector met 1 OTL kan gaan werken. Kanttekening daarbij is dat de beherende partijen op dit moment allemaal hun eigen selectie en aanvulling maken op de standaarden voor beheer (IMBOR) en conditiemetingen (NEN 2767), waardoor altijd individuele aanpassing nodig blijft bij de levering van de bouwende partij naar de beherende partij. 
6. Aggregatie van bijvoorbeeld asfaltmengsels van PIM (constructie) wegvakken naar (beheer) wegvakken kan een incorrect beeld opleveren.
7. Locatie blijft een ‘integrator’ voor meerdere datasets en dit geval heeft dat te maken met de ligging van de weg. Een nationaal gepubliceerde linked dataset van alle wegen zou onderdeel kunnen zijn om datasets te koppelen.
8. PIM-OTL zit op een hoog detailniveau en heeft slechts enkele raakpunten met CB-NL (zie figuur 4). Een mogelijk voordeel van koppeling via CB-NL is in dit project nog onvoldoende onderzocht.
9. 
10. Indien CB-NL informatiemodellen interoperabel wil maken zullen input- en outputmodellen, inclusief transformaties, beschikbaar gesteld moeten worden door te publiceren op een publicatieplatform met een sparql-endpoint (een API voor linked data).
11. Het is aan te bevelen om voor het efficiënt kunnen delen en uitwisselen van data een NEN 2660 compliant referentie-ontologie voor de wegenbouw tot op laagste detailniveau te ontwikkelen. Het huidige PIM-OTL is een goede basis voor verdere ontwikkeling tot een WEGENBOUW-OTL.
12. De NEN 2660 biedt een kader voor het modelleren van gestandaardiseerde ontologieën en met goede domein specifieke afspraken kunnen praktisch toepasbare geoptimaliseerde referentie ontologieën worden ontwikkeld. Om ook tot eenduidige afspraken te komen voor het locatieaanduidingen wordt de ontwikkeling van een ‘nationaal’ locatiereferentiesysteem aanbevolen. Voorgesteld wordt om het huidige NWB als basis te nemen en dit door te ontwikkelen middels het toevoegen van niveau ‘weg’ en niveau ‘strook’ en het beheer van het dit systeem te organiseren
13. Naast de ontwikkeling van een nationaal locatiereferentiesysteem is tevens aan te bevelen om een ‘nationaal’ beschrijvend locatiereferentiesysteem te ontwikkelen voor uniforme beschrijving van locaties in het wegendomein. Voorgesteld wordt om hiervoor het huidige BPS als basis te nemen, dit door te ontwikkelen en het beheer van dit systeem te organiseren
14. Ontwikkelen uniform object identificatiesysteem (voor zover nog nodig bij gebruik linkeddata technologie)
15. In het kader van de ontwikkeling van een NEN 2660 compliant PIM-OTL zijn in een tiental werksessies waaraan Boskalis, Heijmans, TNO en Building Bits hebben deelgenomen aanvullende afspraken gemaakt om te komen tot een voor de praktijk toepasbare ontologie. Aanbevolen wordt om deze aanvullende afspraken in breed verband te communiceren
16. Om de huidige ontwikkelingen in het kader van datamodellering en -uitwisseling enigszins overzichtelijk te houden is het zeer wenselijk dat er duidelijke relaties, toelichtingen en praktische aanbevelingen worden geschreven voor referentie-ontologieën, CB-NL als ‘vertaler’ en initiatieven als BORIUS, ILS-configurator/NEN 2767/IMBOR etc.

Gezien de bovenstaande bevindingen wordt aanbevolen een vervolgtraject te starten waarin de koppeling via CB-NL uitgebreid wordt getest en mogelijke voordelen kunnen worden geïdentificeerd en benoemd. Doelen in het vervolgproject:

* PIM en CB-NL publiceren op een publicatieplatform met een sparql-endpoint (een API voor linked data). IMBOR is al zo gepubliceerd. 
* De waaarde daarvan tonen door in de applicatie van de OTL-Gelderland te zoeken in PIM, IMBOR en CB-NL en concepten, attributen en waardelijsten in de OTL Gelderland een relatie te geven met de bron in PIM, IMBOR en CB-NL; zodat de informatievraag van Gelderland uitgedrukt is in standaarden.