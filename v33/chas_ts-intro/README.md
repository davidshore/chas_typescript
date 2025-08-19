# Kom igång med TypeScript (grunder + buggjakt)

TypeScript är JavaScript med typer. Typer är vilken **typ** av värde en variabel får innehålla. Typer kan vara **strängar**, **tal**, **booleaner**, **arrayer**, **objekt**, **funktioner** osv. Om du skriver kod som gör att en variabel får ett värde som inte passar dess typ, så kommer TypeScript att rapportera ett fel. Detta gör att TypeScript kan hitta buggar i koden.

Exempel på fel:

```ts
let x: number = 10;
x = "Hello world"; // TypeScript rapporterar fel
```

`x: number` betyder alltså att `x` har typen `number`. TypeScript rapporterar här felet att `x` måste vara ett tal, inte en sträng.

Läs på om TypeScript i denna artikel innan du börjar med uppgiften: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

I denna uppgift skapar du ett TypeScript-projekt, kör kompilatorn, och konverterar ett litet JavaScript-program till TypeScript. När du lägger till typer kommer en **bugg** att avslöjas – din uppgift är att hitta och fixa den.

---

## Mål

- Förstå vad TypeScript är och vad `tsc` (kompilatorn) gör.
- Kunna initiera ett projekt, installera TypeScript och skapa en `tsconfig.json`.
- Kunna lägga till typer på funktioner (parametrar & returtyper) och köra koden utan fel.
- Uppleva hur typer hjälper dig att hitta buggar tidigt.

---

## 1) Skapa projektet

**Skapa en mapp på din dator som heter `ts-intro`.**  
Öppna mappen i **VS Code**. (Allt skapande av filer/mappar gör du nu i VS Code.)

Öppna **VS Codes inbyggda terminal** (View → Terminal) och **fortsätt vid steg 2 nedan**.

---

## 2) Initiera npm

Kör i terminalen:

```bash
npm init -y
```

**Vad betyder detta?**  
`npm init` skapar en `package.json` som beskriver projektet (namn, version, skript m.m.). Flaggan `-y` svarar “yes” på standardfrågorna så filen skapas direkt.

**Varför behövs `package.json`?**
För att spara vilka paket du installerar samt egna skript (t.ex. build, start).

---

## 3) Installera TypeScript

```bash
npm install --save-dev typescript
```

**Vad betyder detta?**

- `npm install` hämtar ett paket från npm-registret.
- `--save-dev` lägger paketet under devDependencies (bara nödvändigt vid utveckling).
- Paketet `typescript` innehåller kompilatorn `tsc` (TypeScript Compiler).
- Binären `tsc` hamnar i node_modules/.bin/tsc och kan köras via `npx` eller via npm-skript.

---

## 4) Skapa en TypeScript-konfiguration (tsconfig.json)

Skapa en fil `tsconfig.json` i rotkatalogen (högst upp i projektet) med följande innehåll:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

**Vad betyder de viktigaste inställningarna?**

`target: "ES2020"` – Vilken JS-version koden kompileras till. ES2020 funkar fint i modern Node.

`module: "CommonJS"` – Modulformatet för Node-körning med require/module.exports.

`rootDir: "src"` – Var dina .ts-källfiler bor.

`outDir: "dist"` – Var kompilerad JS hamnar.

`strict: true` – Slår på alla strikta typkontroller (rekommenderas).

`esModuleInterop: true` – Underlättar import av CommonJS-moduler med default-import.

`forceConsistentCasingInFileNames: true` – Säkerställer exakta filnamn i sökvägar av filer. (viktigt mellan olika OS).

`skipLibCheck: true` – Hoppar över typkontroll av externa .d.ts, snabbar upp byggen.

`include: ["src"]` – Berättar vilka mappar kompilatorn ska titta i.

---

## 5) Lägg till npm-skript

Öppna `package.json` och lägg till under `scripts`:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsc -w"
  }
}
```

---

## 6) Utgångsprogrammet (JavaScript)

Skapa mappen `src` och filen `src/index.js` med:

```js
// En liten "kvitto"-generator

function calcTotal(price, taxRate) {
  return price + price * taxRate;
}

function applyDiscount(subtotal, code) {
  if (!code) return 0;

  if (code === "STUDENT") return Math.round(subtotal * 0.1);

  if (code === "VIP") return 50;

  return 0;
}

function printReceipt(customer, price, taxRate, discountCode) {
  const subtotal = calcTotal(price, taxRate);
  const discount = applyDiscount(subtotal, discountCode);
  const total = subtotal - discount;

  console.log(
    "Tack " +
      customer.toUpperCase() +
      "! Att betala: " +
      total.toFixed(2) +
      " kr"
  );
}

// OBS: Medvetet "slarv": pris som sträng i stället för number.
printReceipt("alex", "199", 0.25, "STUDENT");
```

Kör i ren JS först för att se vad som händer:

```bash
node src/index.js
```

---

## 7) Din uppgift (konvertera till TypeScript + buggjakt)

1. Döp om `src/index.js` → `src/index.ts`.
2. Lägg till typer för alla parametrar och returvärden:
   - `calcTotal(price: number, taxRate: number): number`
   - `applyDiscount(subtotal: number, code?: string): number`
   - `printReceipt(customer: string, price: number, taxRate: number, discountCode?: string): void`
3. Bygg och kör:
   ```bash
   npm run build
   npm start
   ```
4. **Buggjakt:** När du har satt typer korrekt kommer kompilatorn att klaga på anropet:  
   `printReceipt("alex", "199", 0.25, "STUDENT");`
   Fixa buggen!
5. Kör igen och kontrollera utskriften i konsolen.

---

## 8) Klar när…

- [ ] tsconfig.json finns.
- [ ] Alla funktioner har typannoteringar.
- [ ] Projektet kompilerar utan TS-fel.
- [ ] Buggen är åtgärdad.
- [ ] `npm start` kör den kompilerade koden i dist/ och skriver ut ett kvitto.

---

## Del 2 – Fortsättningsuppgifter

För dig som blir klar tidigt – bygg vidare på samma kodbas:

### 1. Utöka funktionerna

- Lägg till en funktion `addTip(total: number, percentage: number): number` som lägger på dricks.
- Skapa `printDetailedReceipt(...)` som skriver ut subtotal, moms, rabatt, dricks och total.

### 2. Använd union types

- Gör rabattkoderna till en union type:  
  `type DiscountCode = "STUDENT" | "VIP";`
- Ändra `applyDiscount` så att den använder denna typ.

### 3. Switch

- I `applyDiscount` Använd en `switch` istället för if för rabattkoder och lägg till `never`-check så att alla koder måste hanteras.

Koden för `never`-check ser ut så här:

```ts
  default:
      const neverCheck: never = code;
      return neverCheck;
```

### 4. Customer-objekt

- Gör ett interface `Customer` med: (t.ex. namn, vip-status). Skapa sen ett customer objekt som följer interface:et `Customer` och använd det i `printReceipt` genom att låta `printReceipt` ta ett argument av typen `Customer`.

---

## Läs mer

- Everyday Types – https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- Functions – https://www.typescriptlang.org/docs/handbook/2/functions.html
- tsconfig Reference – https://www.typescriptlang.org/tsconfig
- NPM-skript – https://docs.npmjs.com/cli/v10/using-npm/scripts

---

## :boom: Success!

När du har gjort dessa uppgifter kommer du att kunna:

- Kunna skapa ett TypeScript-projekt
- Kunna lite grunder i TypeScript
- Veta vad `tsc` gör
- Veta vad `tsconfig.json` är
