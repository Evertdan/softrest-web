A comprehensive, detailed slide-out drawer or modal for viewing a specific restaurant order. ALL UI LABELS MUST BE IN SPANISH.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Overlay/Drawer component
- Theme: Light, highly structured, receipt-like clarity
- Surface: Pure Surface (#FFFFFF) overlay on a dark backdrop
- Primary Accent: Terracotta (#C05621)
- Mono Font: JetBrains Mono strictly used for quantities, prices, order IDs
- Dividers: Whisper Border (rgba(226,232,240,0.5)) 1px dashed or solid lines
- Animations: Spring physics sliding in from the right edge.

**Page Structure:**
1. **Drawer Header:** Order ID (e.g., "#ORD-9021"), Table number ("Mesa 4"), and a close 'X' button.
2. **Order Metadata:** Status badge ("En Preparación"), Time elapsed ("14 min"), Waiter name ("Mesero: Carlos").
3. **Items List:** A clean list of ordered items. 
   - Left: Quantity (Mono font, bold)
   - Center: Item name + optional sub-text for notes/allergies (e.g., "Sin cebolla")
   - Right: Price (Mono font)
4. **Financial Totals:** Right-aligned block at the bottom:
   - Subtotal
   - IVA (Tax)
   - Total (Larger font, bold)
5. **Action Footer:** Fixed bottom bar with contextual buttons: "Imprimir Ticket" (Print - secondary ghost), "Editar Orden" (Edit - secondary), "Marcar Listo" (Mark Ready - Primary Terracotta).
6. **Timeline/History:** A small vertical timeline showing order lifecycle (Creada -> Cocina -> ...).
