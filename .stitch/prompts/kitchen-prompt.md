A high-contrast, ultra-readable Kitchen Display System (KDS) screen optimized for fast-paced kitchen environments. ALL UI LABELS MUST BE IN SPANISH.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Tablet/Monitor landscape priority
- Theme: High-contrast (Clean Light Mode with strong borders, or Dark Mode)
- Background: Canvas Sand (#FAFAF9) or Dark Charcoal
- Primary Accent: Terracotta (#C05621)
- Mono Font: JetBrains Mono for timers and quantities (CRITICAL for quick scanning)
- Card Styles: Sturdy, clear borders, colored headers based on urgency
- Animations: Smooth transitions when cards move between columns.

**Page Structure:**
1. **Header:** Minimal. "Pantalla de Cocina", current time, and a toggle for audio alerts.
2. **Kanban/Column Layout:** 3 distinct columns taking full height: 
   - "Pendientes" (Pending - gray/neutral header)
   - "En Preparación" (In Progress - Terracotta header)
   - "Listas" (Ready - Emerald #059669 header)
3. **Order Tickets (Cards):** Inside columns.
   - Ticket Header: Table number ("Mesa 12") prominently displayed, Order ID.
   - Timer: Live elapsed time in Mono font. Turns red if > 15 mins.
   - Items: High-contrast list. Quantities bolded. Notes/Allergies highlighted in yellow/red for safety ("ALERGIA: Maní").
4. **Ticket Actions:** A large, easy-to-tap primary button on each ticket to advance its state ("Cocinar" -> "Terminar").
