# Instructie werken met Github

## Wat is Github? 
[Wikipedia](https://nl.wikipedia.org/wiki/GitHub) zegt:

"GitHub is een online platform waar software op kan worden geplaatst. GitHub is gebouwd rond het Git-versiebeheersysteem, waardoor GitHub alle mogelijkheden van Git en eigen toevoegingen aanbiedt."

"Het beschikt onder ander over toegangscontrole en verschillende samenwerkingsfuncties, zoals een issue tracker, een forum voor het aanvragen van functies, takenlijsten en wiki's voor ieder project."

Git maakt gebruik van line-based code comparisson. bij elke wijziging wordt dus gekeken 

**Let op:** Alles wat je in dit repository zet is openbaar toegankelijk.

## Hoe werkt CB-NL met Github

We gebruiken Github om onze issues bij te houden en onze code en producten met elkaar te delen.

### Variant 1 (VOORSTEL)

Bij CB-NL werken we allemaal in de master/main branch. Dat is de simpelste manier van werken.Gevolg hiervan is dat we het review systeem van Github (rond de pull-requests) niet gebruiken en we elkaar dus actief om reviews moeten vragen van wijzigingen die we al doorgevoerd hebben in de master/main. Iedereen werkt aan een kopie op zijn lokale omgeving en uploadt (pusht) die naar de Github master/main branch.

### Variant 2

Bij CB-NL werken we per takenpakket in een verschillende branch van de software. Zo hebben we allemaal een eigen omgeving waar de wijzigingen rond die taak worden doorgevoerd. Als de taak is afgerond wordt een pull-request aangemaakt waarbij om een review wordt gevraagd. Als de review klaar is dan worden de wijzigingen automatisch doorgevoerd in de master/main branch. Deze variant is complexer, maar wel beter op te schalen. Iedereen werkt aan een lokale lokale kopie van de branch waar hij aan werkt, uploadt (pusht) die naar de branch op Github, waarna deze eventueel kan worden samengevoegd.

## Hoe doe je dat dan?

**Let op: instructie o.b.v. variant 1**

De Github issues, wiki, etc. kun je het best benaderen via de browser.

Je kunt Git benaderen met elke git client, en veel text editors hebben ook een git-integratie.

Als je niet weet waar je moet beginnen adviseren we om (Github Desktop)[https://desktop.github.com/] te installeren. Daarmee kun je een lokale kopie maken van de code op Github (pull), en die na bewerkingen (commit) ook weer terug zetten op Github (push).

Na installatie log je in met de button "Sign in to GitHub.com"

Na het inloggen kun aan de rechter kant zoeken naar het `bimloket/CB-NL` repository. Selecteer dat repository en klik op de blauwe button "Clone bimloket/CB-NL". Vul in het pop-up venster bij "Local path" de gewenste locatie voor de lokale kopie in. Klik op de blauwe button en de bestanden worden opgehaald.

Ga naar de locatie die je hebt opgegeven en je zult zien dat daar de bestanden van github nu staan. Bewerk de bestanden hoe je gewend bent. Van noemenswaardige bewerkingen (kleine mijlpaal in je ontwikkeling, wijzigingen van bestandsnamen en locaties) maak je een commit door in het Github Deskop venster links onderin een titel in te vullen en op "Commit to main" te klikken. De bewerkingen worden nu lokaal toegevoegd aan de versiehistorie. Om dit te uploaden klik je in de bovenste balk op "Push origin" je bestanden worden nu geupload naar Github.

**Let op:** Als je al een tijdje niet aan het project gewerkt hebt, moet je de lokale code even verversen. gebruik hiervoor de fetch button in de bovenste balk.

*To do: dit document aanvullen met screenshots*

