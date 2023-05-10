let sectionIndex = 0;

const logoSection = document.getElementById("logoSection");
const aboutSection = document.getElementById("aboutSection");
const servicesSection1 = document.getElementById("servicesSection1");
const servicesSection2 = document.getElementById("servicesSection2");
const contactSection = document.getElementById("contactSection");

const sections = [logoSection, aboutSection, servicesSection1, servicesSection2, contactSection];

let sectionObjects = sections.map(section => ({
	offsetTop: section.offsetTop,
	clientHeight: section.clientHeight
}))

document.getElementById("scroll-button").addEventListener("click", () => {
  if(sectionIndex === sections.length - 1) {
		sections[0].scrollIntoView({behavior: "smooth"});
	};
	sections[sectionIndex + 1].scrollIntoView({behavior: "smooth"});
	sectionIndex += 1;
});

function logScroll() {
	const scrollY = window.scrollY;
	const scrollButton = document.getElementById("scroll-button");

	sectionObjects.forEach((section, index) => {
		if(scrollY >= section.offsetTop && scrollY <= section.offsetTop + section.clientHeight) {
			sectionIndex = index;
		}
		if(sectionIndex === sectionObjects.length - 1) {
			document.getElementById("arrow-icon").className = "arrow-up center";
		} else {
			console.log(sectionIndex, "there")
			document.getElementById("arrow-icon").className = "arrow-down center";
		}
	});
}

const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}



document.addEventListener('scroll', debounce(logScroll, 500));