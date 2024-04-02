/* ÚKOL 7 - LEKCE 9
Newsletter, kontrola:
Pokračujte v příkladu Newsletter z lekce. V tomto cvičení zařidíme, aby uživatel 
při zadávání e-mailu dostal zpětnou vazbu, pokud zadává neplatný vstup.
1. V CSS si vytvořte třídu, která dělá výrazný červený rámeček kolem textového políčka.
2. Přidejte na textové políčko posluchač události input.
3. Během toho, jak uživatel píše, kontrolujte, jestli náhodou políčko není prázdné. V takovém 
případě na políčko přidejte třídu s červeným rámečkem. Pokud je vstup v pořádku, rámeček 
odeberte.
4. Zobrazte červený rámeček i v případě, že zadaný e-mail neobsahuje zavináč. K tomu 
můžete použít metodu indexOf nebo includes. */

const formular = document.querySelector('form')
const input = document.querySelector('input')

const odebirat = (event) => {
	event.preventDefault()
	const email = input.value
	if (!email.includes('@') || email.trim() === '') {
		input.classList.add('error')
		return;
	}
	formular.innerHTML = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

const checkInput = () => {
	const email = input.value
	if (!email.includes('@') || email.trim() === '') {
		input.classList.add('error')
	} else {
		input.classList.remove('error')
	}
}

formular.addEventListener('submit', odebirat)
input.addEventListener('input', checkInput)