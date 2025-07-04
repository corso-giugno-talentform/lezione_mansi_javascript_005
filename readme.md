## **Cos'è il DOM?**

Il DOM (Document Object Model) è la rappresentazione JavaScript del tuo HTML. Pensa al DOM come a un **traduttore universale**:

- **HTML** = La struttura che vedi
- **DOM** = Lo stesso contenuto ma in "linguaggio JavaScript"
- **document** = L'oggetto madre che contiene tutto

```jsx
// Esplora il DOM
console.log(document);        // Mostra tutto l'HTML
console.dir(document);        // Mostra le proprietà JavaScript

```

**💡 Concetto chiave**: Il DOM trasforma ogni tag HTML in un **oggetto JavaScript** che puoi manipolare!

---

## **1. SELEZIONARE ELEMENTI**

### **querySelector() - Per UN elemento**

```jsx
// Seleziona per ID (# davanti)
const header = document.querySelector('#main-header');

// Seleziona per classe (. davanti)
const bottone = document.querySelector('.btn-primary');

// Seleziona per tag (nessun simbolo)
const paragrafo = document.querySelector('p');
```

**💡 Regola d'oro**: Sempre selezionare l'elemento prima di modificarlo!

---

## **2. MANIPOLARE IL CONTENUTO**

### **innerHTML - Cambia contenuto HTML**

```jsx
const div = document.querySelector('#myDiv');

// Sostituisce tutto il contenuto
div.innerHTML = '<h2>Nuovo titolo</h2>';

// Aggiunge al contenuto esistente
div.innerHTML += '<p>Paragrafo aggiunto</p>';

// Usa template string per variabili
const nome = 'Mario';
const eta = 30;
div.innerHTML = `
    <h3>Ciao ${nome}!</h3>
    <p>Hai ${eta} anni</p>
`;

```

### **innerText - Solo testo semplice**

```jsx
const p = document.querySelector('p');
p.innerText = 'Solo testo, niente HTML';

// La differenza:
element.innerHTML = '<strong>Grassetto</strong>';  // Verrà renderizzato in grassetto
element.innerText = '<strong>Grassetto</strong>';  // Verrà mostrato come testo normale

```

---

## **3. ESEMPIO PRATICO: STAMPARE UN ARRAY IN UNA LISTA HTML**

Questo è uno dei pattern più comuni nel web development!

### **HTML di partenza:**

```html
<ul id="lista-prodotti"></ul>
<div id="container-cards"></div>

```

### **Metodo 1: Loop classico**

```jsx
const prodotti = ['iPhone', 'Samsung', 'Xiaomi', 'OnePlus'];
const lista = document.querySelector('#lista-prodotti');

// Svuota la lista prima di riempirla
lista.innerHTML = '';

// Aggiungi ogni elemento
for (let i = 0; i < prodotti.length; i++) {
    lista.innerHTML += `<li>${prodotti[i]}</li>`;
}

```

### **Metodo 2: forEach (più moderno)**

```jsx
const prodotti = ['iPhone', 'Samsung', 'Xiaomi', 'OnePlus'];
const lista = document.querySelector('#lista-prodotti');

lista.innerHTML = ''; // Pulisci la lista

prodotti.forEach(prodotto => {
    lista.innerHTML += `<li>${prodotto}</li>`;
});

```

## **ESERCIZI PRATICI**

### **Esercizio 1: Selezione base**

Crea un file HTML con questi elementi e selezionali:

```html
<h1 id="titolo-principale">Il mio sito</h1>
<p id="descrizione">Questa è la descrizione</p>
<button >Clicca qui</button>

```

**Da fare:**

```jsx
// 1. Seleziona il titolo per ID
// 2. Seleziona il tag button per classe


```

### **Esercizio 2: Modifica contenuti**

Partendo dall'HTML dell'esercizio 1:

```jsx
// 1. Cambia il titolo in "Benvenuto nel mio sito!"
// 2. Cambia la descrizione in "Sito rinnovato con JavaScript"
// 3. Cambia il testo del bottone in "Inizia ora"

```

### **Esercizio 3: Lista della spesa**

Crea una lista della spesa dinamica:

```html
<h2>Lista della spesa</h2>
<ul id="spesa"></ul>

```

```jsx
const spesa = ['Pane', 'Latte', 'Uova', 'Pasta', 'Pomodori'];

// Stampa tutti gli elementi nella lista
// Risultato atteso:
// • Pane
// • Latte
// • Uova
// • Pasta
// • Pomodori

```