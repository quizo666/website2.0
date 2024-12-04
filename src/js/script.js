const projects = [
	{
		title: 'Услуги оператора',
		description:
			'Видеосъемка любой направленности и сложности. Работа профессионала.',
		image:
			'https://www.shutterstock.com/image-photo/cameraman-work-shallow-dof-effect-260nw-63020578.jpg',
		link: 'contacts.html',
	},
	{
		title: 'Монтаж и цветокоррекция',
		description:
			'Профессиональный монтаж и последующая цветокоррекция в программах сервиса Adobe, DaVinci, либо работа с пленкой.',
		image:
			'https://marsvaardig.photo/?url=https://files.marsvaardig.space/files/www.promotionfilm.nl/attachments/c46053bbabca6d8b99ce40b965e0231a.jpg&fit=cover&bg=ffffff&q=75&w=680&h=340&output=jpg',
		link: 'contacts.html',
	},
	{
		title: 'Написание оригинальных текстов',
		description:
			'Написание сценария и тритмента для проекта любой сложности: от короткого видео до фильма.',
		image:
			'https://blog.finaldraft.com/hs-fs/hubfs/How%20Long%20Does%20It%20Take%20To%20Write%20a%20Screenplay2.jpg?width=800&height=438&name=How%20Long%20Does%20It%20Take%20To%20Write%20a%20Screenplay2.jpg',
		link: 'contacts.html',
	},
	{
		title: 'Звукорежиссура',
		description:
			'Запись звука на локации, его коррекция и последующее наложение звуковых эффектов.',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/5/54/Production_sound_mixer.jpg',
		link: 'contacts.html',
	},
	{
		title: 'Базовый пакет',
		description:
			'4 предложенных ранее функции вместе по более выгодной стоимости',
		image:
			'https://www.shutterstock.com/image-photo/director-work-on-set-works-600nw-2231811301.jpg',
		link: 'contacts.html',
	},
	{
		title: 'Расширенный пакет',
		description:
			'Полный продакшн от начала до конца "под ключ". Включает в себя "Базовый пакет", а также дополнительные функции.',
		image:
			'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/03/shooting-1584276298.jpg',
		link: 'contacts.html',
	},
]

const container = document.getElementById('projects-container')

projects.forEach(project => {
	const projectCard = document.createElement('div')
	projectCard.classList.add('project-card')

	projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="order-button">Заказать</a>
    `

	container.appendChild(projectCard)
})
