
// random words: Countries

let country = [
	"mali",
	"brazil",
	"zimbabwe",
	"spain",
	"france",
	"lesotho",
	"swaziland",
	"england",
	"canada",
	"qatar",
	"india",
	"peru",
	"turkey",
	"russia",
	"algeria",
	"nigeria",
	"angola",
	"burundi",
	"australia",
	"croatia",
	"kenya",
	"iraq",
	"mozambique",
	"senegal"
]

//Randomly select a word/country and export 
function randomWord() {
  return country[Math.floor(Math.random() * country.length)]
}

export { randomWord }