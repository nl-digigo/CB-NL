var respecConfig = {
  // => https://github.com/stichting-crow/respec/wiki
  specStatus: "DRAFT",
  shortName: "CB-NL/",
  specType: "beheerdocumentatie", // vrije tekst, kleine letter
  imprint: "bimloket",

  // A YYYY-MM-DD date. The publication date of the present document.
  // Als er geen publishDate is opgegeven, genereert ReSpec de dataum o.b.v. de laatste wijzigingen
  // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
  publishDate: "2021-03-12",

  // license can be one of the following: cc0, cc-by or cc-by-nd((default)) (see https://github.com/Geonovum/respec/wiki/license )
  license: "cc-by-nd",

  // Overrides the standard logo with one or more other logos. (see https://respec.org/docs/#logos)
  // Geef een lege array op als er geen <default> logo moet staan
  // logos: [],

  //Adds a JSON-LD script element containing schema.org information, which can be useful for search engines.
  doJsonLd: true,

  // An array of person objects describing the editors of the document
  // this can be simple or more elaborated
  editors: [
    {
      name: "Henny Stolwijk",
      company: "Bimloket",
      companyURL: "https://www.bimloket.nl",
    },
    {
      name: "Niels Hoffmann",
      company: "Provincie Noord-Holland",
      companyURL: "https://www.noord-holland.nl",
    },
  ],
  // An array of person objects describing the authors of the document
  // this can be simple or more elaborated
  authors: [
    {
      name: "Projectgroep Kernmodel CB-NL",
      company: "",
      companyURL: "https://www.bimloket.nl",
    },
  ],
  // The github option allows you associate your specification with a repository on GitHub.
  github: "https://github.com/bimloket/CB-NL",

  // The URL of your test suite, gets included in the specification's headers.
  // testSuiteURI: "https://portaal.digikoppeling.nl/CV/home.html",

  // With long algorithms in a specification, it can be useful to allow readers to click on variables marked up with <var> (e.g., Let <var>elem</var> be ...).
  // highlightVars: true,

  // Controls if linked "§" section markers are added to a document
  // addSectionLinks: true,

  // Lints for accessibility issues using axe-core
  a11y: false,

  // A number indicating the maximum depth of the table of contents. Defaults to 0 which includes all levels.
  maxTocLevel: 3,

  // Shows links to alternate formats (such as PDF, ePub) in the document header.
  // alternateFormats: [{
  //     label: "html",
  //     uri: "https://publicatie.centrumvoorstandaarden.nl/api/oauth/static.html",
  //   },
  //   {
  //     label: "pdf",
  //     uri: "https://publicatie.centrumvoorstandaarden.nl/api/oauth/static.pdf",
  //   },
  // ],

  // You can use markdown to write ReSpec based documents.
  // format: "markdown",
  // <section data-include-format="markdown" data-include="<filename>.md"></section>

  // If you need to include a one-off reference that isn't in the SpecRef database or
  // if you need to override an existing reference with specific content, then you can use this configuration option.
  localBiblio: {},
};
