/**
 *   Thank you minimize and me not saving the original code 😅

 */

var portfolio = [{
	title: "MeiliDu",
	description: 'Ein Theme für Hexo. Unter dem Motto "schön Lesen", liegt der Fokus dieses Themes auf Texten.',
	image: "/img/meilidu.jpg",
	link: "https://github.com/HoverBaum/meilidu-hexo",
	linkTitle: "MeiliDu Repo"
}, {
    title: "LoL Wishes",
    description: "Eine Material design Website, auf der Nutzer sich anmelden, einen Wunschliste erstellen und E-Mails bekommen, wenn sie gewünschte Skins billiger kaufen können. LoL Wishes setztim Backend vollständig auf JavaScript. (Eingestellt)",
    image: "/img/lolwishes.jpg",
}, {
    title: "Browser based games",
    description: "Kleine Spiele, entwickelt in JavaScript.",
    image: "/img/browserbasedgames.jpg",
    link: "http://browserbasedgames.net/",
    linkTitle: "BrowserBasedGames"
}, {
    title: "Mensa Bot",
    description: "Ein Twitter-Bot, der jeden Tag um 10Uhr über die Speisekarte in der Mensa zu Lübeck berichtet. Eine in Node.js realisierte Anwendung.<br>Mitlerweile leider inaktiv.",
    image: "/img/mensahlbot.jpg",
    link: "https://twitter.com/mensahlbot",
    linkTitle: "MensaHLBot"
}];
$(document).ready(function() {
    var e = $("#portfolioContainer"),
        i = $("#portfolioProgress"),
        t = portfolio.length,
        a = 0;
    e.hide(), portfolio.forEach(function(s) {
        var n = $('<div class="col s12 m6 l3 portfolio-item"></div>'),
            l = $('<div class="card"></div>'),
            r = $('<div class="card-image waves-effect waves-block waves-light"></div>');
        l.append(r);
        var o = new Image;
        o.onload = function() {
            a += 1, i.css("width", a / t * 100 + "%"), a === t && (e.slideDown(300), i.parent().slideUp(300))
        }, o.setAttribute("alt", s.title), o.setAttribute("class", "responsive-image activator"), o.src = s.image, r.append(o), l.append('<div class="card-content"><span class="card-title activator grey-text text-darken-4">' + s.title + `<i class="mdi-navigation-more-vert right"></i></span><p>${s.link ? `<a href="${s.link}"> ${s.linkTitle} </a>` : ''}</p></div>`), l.append('<div class="card-reveal"><span class="card-title grey-text text-darken-4">' + s.title + '<i class="mdi-navigation-close right"></i></span><p>' + s.description + "</p></div>"), e.append(n.append(l))
    })
});
