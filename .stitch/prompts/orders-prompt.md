A high-density, highly readable orders management screen for a Mexican restaurant POS. ALL UI LABELS MUST BE IN SPANISH.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first (responsive)
- Theme: Light, data-dense but clean
- Background: Canvas Sand (#FAFAF9)
- Surface: Pure Surface (#FFFFFF)
- Primary Accent: Terracotta (#C05621)
- Text Primary: Charcoal Ink (#18181B)
- Mono Font: JetBrains Mono for Order IDs, times, and prices
- Badges: Pill-shaped (rounded-full) with soft background tints
- Tables: Clean 1px structural lines (rgba(226,232,240,0.5)), generous row padding

**Page Structure:**
1. **Sidebar Navigation:** Same as dashboard, but "Órdenes" is active.
2. **Page Header:** Title "Gestión de Órdenes". Primary Call-To-Action on the right: "Nueva Orden" (+ icon).
3. **Filter Bar:** Row containing:
   - Search input ("Buscar por ID o mesa...")
   - Status dropdown filter ("Todos los estados")
   - Date range picker
4. **Orders Table:** Clean, full-width data table. Columns: ID (Mono), Mesa (Table), Artículos (Items count), Total (Mono), Estado (Status badge), Tiempo (Elapsed time), Acciones.
5. **Status Badges:** Use these states: Pendiente (Gray), En Preparación (Orange/Terracotta), Listo (Blue), Entregado (Emerald #059669), Cancelado (Rose #E11D48).
6. **Action Buttons:** Small ghost/icon buttons per row for View (Ver), Edit (Editar), Cancel (Cancelar).
