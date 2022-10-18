# Conclusies en aanbevelingen

1. Het is eenvoudig uitvoerbaar om 2D GIS en andere datasets te vertalen naar Linked Data.
2. Vertalen van datasets naar LD kan grotendeels zonder een OTL
3. Een OTL kan meer context geven aan de data zoals beschrijvingen, definities, en cardinaliteiten op kenmerken en relaties.
4. M.b.t. decompositieniveaus lijkt OTL-PIM te beginnen waar OTL-GLD ophoudt waardoor een simpele ‘relatie’ tussen wegvakken en PIM wegvakken snel meerwaarde kan opleveren.
5. Theoretisch lijkt het handig om een OTL-Wegenbouw te hebben waarbij de beheer-view en de wegenbouw-view vertegenwoordigd is inclusief conditiemetingen opdat de gehele sector met 1 OTL kan gaan werken.
6. Aggregatie van bijvoorbeeld asfaltmengsels van PIM (constructie) wegvakken naar (beheer) wegvakken kan een incorrect beeld opleveren
7. Locatie blijft een ‘integrator’ voor meerdere datasets en dit geval heeft dat te maken met de ligging van de weg. Een nationaal gepubliceerde linked dataset van alle wegen zou onderdeel kunnen zijn om datasets te koppelen.
8. PIM-OTL zit op een hoog detailniveau en heeft slechts enkele raakpunten met CB-NL (zie figuur 4). Een mogelijk voordeel van koppeling via CB-NL is in dit project nog onvoldoende onderzocht.
9. CB-NL kan leverancier zijn van definities die relevant zijn voor de gebruiker.
10. Indien CB-NL informatiemodellen interoperabel wil maken zullen input- en outputmodellen, inclusief transformaties, beschikbaar gesteld moeten worden door te publiceren op een publicatieplatform met een sparql-endpoint (een API voor linked data).

Gezien de bovenstaande bevindingen wordt aanbevolen een vervolgtraject te starten waarin de koppeling via CB-NL uitgebreid wordt getest en mogelijke voordelen kunnen worden geïdentificeerd en benoemd. Doelen in het vervolgproject:

* PIM en CB-NL publiceren op een publicatieplatform met een sparql-endpoint (een API voor linked data). IMBOR is al zo gepubliceerd. 
* De waaarde daarvan tonen door in de applicatie van de OTL-Gelderland te zoeken in PIM, IMBOR en CB-NL en concepten, attributen en waardelijsten in de OTL Gelderland een relatie te geven met de bron in PIM, IMBOR en CB-NL; zodat de informatievraag van Gelderland uitgedrukt is in standaarden.