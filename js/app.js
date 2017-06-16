var horoscopes = [
	{
		name: 'cancer',
		image: 'img/cancer.png',
		text: 'The greatest strength of every Cancer is their compassion, followed by their ability to look after people they care about. Born with extremely high capability for empathy, they can have trouble holding on to their boundaries.'
	},
	{
		name: 'pisces',
		image: 'img/pisces.png',
		text: 'One of their greatest strengths of a Pisces is their imagination, and it sparks creativity, focus and dedication, once they committ to a certain cause. These individuals are talented, compassionate and sensitive, always with a vision they need to bring to life. They will adapt with ease, be spontaneous and full of suprises, while at the same time gifted with a strong faith in the importance of relations with other people.'
	},
	{
		name: 'aries',
		image: 'img/aries.png',
		text: 'Aries are courageous and is considered the strongest sign of the Zodiac. Ready to take on any challenge. These individuals wont hold on to the past and wallow over things that are dead and gone. Their positive characteristics are enthusiam, optimism, independence, strength, initiative and genorosity.'
	},
	{
		name: 'gemini',
		image: 'img/gemini.png',
		text: 'People born with the Sun in Gemini are spirited, fast, adjustable and smart. Their wit and their sense of humor will help them overcome any difficulty life brings their way, while the gift of communication is their biggest aasset.'
	},
	{
		name: 'capricorn',
		image: 'img/capricorn.png',
		text: 'The greatest strength of a Capricorn are his ambition, disciple and patience. With their ability to plan ahead and think of all necessary steps in their chase for a certain goal, they are often successful in their career path. Reliable and dedicated, these individuals oftne have trouble opening up to other people, but become trustworth and stable in a relationship once they decide to be part of it.'
	},
	{
		name: 'saggitarius',
		image: 'img/saggitarius.png',
		text: 'Sagittarius is an adventurer, both physically and mentally. People born in this Sun sign have a broad mind and they are able to change perspective with ease, until they find the right version of words spoken, events or reasons for anything they want to examine. Highly adjustable and with deep understanding for different people, nations, countries, governments and in general - ways of life, they blend in perfectly with the natives, wherever they are.'
	},
	{
		name: 'libra',
		image: 'img/libra.png',
		text: 'The biggest qualities of Libra are their tact, fineness and their ability to take responsibility. This is a sign that leads us to our final verdict, and when in a good place, satisfied and confident, a Libra can be just and incredibly balanced.'
	},
	{
		name: 'virgo',
		image: 'img/virgo.png',
		text: 'Virgo is considered the most intelligent sign in the zodiac, as the place where Mercury is exalted. They are in fact truly practical and smart when it comes to everyday issues. Analytical and deep, their greatest strength is their mind as they should use it to resolve matters of life that obviously present to them for a reason.'
	},
	{
		name: 'aquarius',
		image: 'img/aquarius.png',
		text: 'The sign of aquarius is intelligent, energetic and full of brilliant ideas, while human and honestly turned to the wellbeing of the human race. They will shake the world of everyone around them inpspire them to make changes they need, without fear to show their individuality.'
	},
	{
		name: 'scorpio',
		image: 'img/scorpio.png',
		text: 'Although it can sometimes be hard even for Scorpios to accept this fact, their greatest strength is their sensitivity. While many Scorpios hide from their own emotions, not knowing what to do with their intensity and depth, when they fid a way to regenerate and forgive those that hurt them, they become amazing healers, psychologists, partners and friends.'
	},
	{
		name: 'taurus',
		image: 'img/taurs.png',
		text: 'Taurus is known for their attachemen and reliabliity. Kind, dependable and caring, they will always give a helping hand, always prepared to push others forward when they get stuck. They understand ways of the material world which makes them good financial advisors and bank employees.'
	},
	{
		name: 'leo',
		image: 'img/leo.png',
		text: 'Leo is confident and full of vigor and energy. This can make them successful in everything they set out to do. These qualities can be contagious to those around them, and this resulst in a lot of creative energy and possibilities opening up in front of those who enjoy their presence.'
	}
];

function getHoroscope(){
  var input = document.getElementById('input');
  var image = document.getElementById('image');
  var name = document.getElementById('name');
  var text = document.getElementById('text');

  console.log(input.value);

  for(var i =0; i <horoscopes.length; i++) {
    if(input.value.toLowerCase() == horoscopes[i].name){
      console.log(input.value + ' matched with ' + horoscopes[i].name)
      name.textContent += horoscopes[i].name;
      image.src += horoscopes[i].image;
      text.textContent += horoscopes[i].text;
    }
  }
}
