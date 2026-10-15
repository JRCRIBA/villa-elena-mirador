/**
 * VILLA ELENA MIRADOR & ECO-RESORT
 * Application Core, Atelier UI Interactions, Quote Engine & WhatsApp Booking
 * Cumplimiento Estricto: Lucide Icons, Spec-Driven Data, Zero-Dependency
 */

(function () {
  'use strict';

  // State Management
  const state = {
    theme: localStorage.getItem('villa_elena_theme') || 'light',
    selectedFilter: 'all',
    quote: {
      guestName: '',
      guestPhone: '',
      guestEmail: '',
      checkInDate: '',
      checkOutDate: '',
      adults: 2,
      children: 0,
      notes: '',
      items: [] // { id, name, category, price, qty, unit, subtotal }
    }
  };

  const STORAGE_KEY = 'villa_elena_quote_v2';
  const TTL_MS = 24 * 60 * 60 * 1000; // Caducidad automática de 24 horas (Habeas Data & Privacidad)

  // Motor de Validación y Sanitización de Seguridad (Pilares 1, 3 y 4)
  const SecurityValidator = {
    escapeHTML(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    validateName(name) {
      const clean = (name || '').trim();
      if (!clean) return { valid: false, error: 'Por favor ingresa tu nombre completo.' };
      if (clean.length < 3 || clean.length > 60) return { valid: false, error: 'El nombre debe tener entre 3 y 60 caracteres.' };
      const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\.\-]+$/;
      if (!regex.test(clean)) return { valid: false, error: 'El nombre solo debe contener letras y espacios.' };
      return { valid: true, value: clean };
    },

    validatePhone(phone) {
      const clean = (phone || '').replace(/[\s\-\(\)]/g, '').trim();
      if (!clean) return { valid: false, error: 'Por favor ingresa un número de teléfono o WhatsApp de contacto.' };
      const regex = /^\+?[0-9]{7,15}$/;
      if (!regex.test(clean)) return { valid: false, error: 'Ingresa un número telefónico válido (entre 7 y 15 dígitos).' };
      return { valid: true, value: clean };
    },

    validateDates(checkIn, checkOut) {
      if (!checkIn || !checkOut) return { valid: false, error: 'Por favor selecciona las fechas de llegada y salida.' };
      const inDate = new Date(checkIn + 'T00:00:00');
      const outDate = new Date(checkOut + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (isNaN(inDate.getTime()) || isNaN(outDate.getTime())) {
        return { valid: false, error: 'Fechas con formato inválido.' };
      }
      const yesterday = new Date(today.getTime() - 86400000);
      if (inDate < yesterday) {
        return { valid: false, error: 'La fecha de llegada no puede ser anterior al día de hoy.' };
      }
      if (outDate <= inDate) {
        return { valid: false, error: 'La fecha de salida debe ser posterior a la fecha de llegada.' };
      }
      const diffDays = Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24));
      if (diffDays > 30) {
        return { valid: false, error: 'Para estancias superiores a 30 días, por favor contáctanos directamente.' };
      }
      return { valid: true, inDate: checkIn, outDate: checkOut, nights: diffDays };
    },

    sanitizeNotes(notes) {
      if (!notes) return '';
      return String(notes).slice(0, 250).trim();
    }
  };

  // Restaurar cotización previa con verificación estricta de caducidad (TTL)
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.timestamp && (Date.now() - parsed.timestamp < TTL_MS)) {
        if (parsed.quote && Array.isArray(parsed.quote.items)) {
          state.quote = parsed.quote;
        }
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  } catch (e) {
    console.warn('Could not restore quote cache safely', e);
  }

  // Currency Formatter COP
  const formatCOP = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // SVG Lucide Icons Factory (Regla Invariante: Solo Lucide, strokeWidth 1.5)
  const getLucideIcon = (name, extraClass = '') => {
    const icons = {
      'sun': '<path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/><circle cx="12" cy="12" r="4"/>',
      'moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
      'calendar': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
      'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      'compass': '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
      'sparkles': '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>',
      'mountain': '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
      'trees': '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7l-3-4a1 1 0 0 0-1.6 0l-3 4a1 1 0 0 0 .8 1.7H12l-3 3.3a1 1 0 0 0 .7 1.7H12l-3 3.3a1 1 0 0 0 .7 1.7Z"/>',
      'telescope': '<path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/><path d="m13.56 11.747 4.332-.924"/><path d="m16 21-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a2 2 0 0 1 2.425 1.455l.272 1.09a2 2 0 0 1-1.455 2.425l-1.09.272a2 2 0 0 1-2.425-1.455Z"/><path d="m6 21 3.105-6.21"/><path d="M8.5 13.5 10 9"/>',
      'copy': '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
      'utensils': '<path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 2v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V2"/><path d="M15 15v7"/><path d="M9 15v7"/><path d="M6 2v6"/>',
      'flame': '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
      'wine': '<path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/>',
      'coffee': '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2"/><path d="M6 2v2"/>',
      'check': '<polyline points="20 6 9 17 4 12"/>',
      'plus': '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
      'minus': '<line x1="5" y1="12" x2="19" y2="12"/>',
      'trash': '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
      'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
      'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
      'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
      'x': '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
      'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
      'message-circle': '<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>',
      'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
      'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      'shopping-bag': '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
      'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
      'activity': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
      'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
      'play': '<polygon points="6 3 20 12 6 21 6 3"/>',
      'video': '<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>',
      'maximize': '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',
      'award': '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
      'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
    };

    const inner = icons[name] || icons['sparkles'];
    return `<svg class="lucide ${extraClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
  };

  // Toast Notification
  const showToast = (message, icon = 'check') => {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `${getLucideIcon(icon)} <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };

  // Theme Initializer & Toggle
  const applyTheme = (themeName) => {
    document.documentElement.setAttribute('data-theme', themeName);
    state.theme = themeName;
    localStorage.setItem('villa_elena_theme', themeName);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = themeName === 'dark' ? getLucideIcon('sun') : getLucideIcon('moon');
      themeBtn.setAttribute('title', themeName === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo noche');
    }
  };

  // Quote Engine State Mutators con persistencia protegida (Pilar 3)
  const saveQuoteToStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        timestamp: Date.now(),
        quote: state.quote
      }));
    } catch (e) {
      console.warn('Storage save error', e);
    }
    updateQuoteUI();
  };

  const addItemToQuote = (itemData) => {
    const existing = state.quote.items.find(i => i.id === itemData.id);
    if (existing) {
      existing.qty += 1;
      existing.subtotal = existing.qty * existing.price;
    } else {
      state.quote.items.push({
        id: itemData.id,
        name: itemData.name,
        category: itemData.category || 'general',
        price: itemData.price,
        qty: 1,
        unit: itemData.unit || 'servicio',
        subtotal: itemData.price
      });
    }
    saveQuoteToStorage();
    showToast(`"${itemData.name}" añadido a tu cotización.`);
  };

  const removeItemFromQuote = (id) => {
    state.quote.items = state.quote.items.filter(i => i.id !== id);
    saveQuoteToStorage();
    showToast('Elemento retirado de tu cotización.', 'trash');
  };

  const updateItemQty = (id, delta) => {
    const item = state.quote.items.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      removeItemFromQuote(id);
    } else {
      item.subtotal = item.qty * item.price;
      saveQuoteToStorage();
    }
  };

  const calculateTotal = () => {
    return state.quote.items.reduce((acc, curr) => acc + curr.subtotal, 0);
  };

  // Quote Drawer UI Renderer
  const updateQuoteUI = () => {
    const total = calculateTotal();
    const count = state.quote.items.reduce((acc, curr) => acc + curr.qty, 0);

    // Update Floating Pill & Nav Badge
    const pill = document.getElementById('floatingQuotePill');
    const pillCount = document.getElementById('floatingQuoteCount');
    const pillTotal = document.getElementById('floatingQuoteTotal');
    const navBadge = document.getElementById('navQuoteCount');

    if (count > 0) {
      if (pill && pillCount && pillTotal) {
        pill.style.display = 'flex';
        pillCount.textContent = count;
        pillTotal.textContent = formatCOP(total);
      }
      if (navBadge) {
        navBadge.style.display = 'flex';
        navBadge.textContent = count;
      }
    } else {
      if (pill) pill.style.display = 'none';
      if (navBadge) navBadge.style.display = 'none';
    }

    // Update Drawer Contents
    const list = document.getElementById('quoteDrawerList');
    const totalEl = document.getElementById('drawerTotalAmount');
    if (totalEl) totalEl.textContent = formatCOP(total);

    if (list) {
      if (state.quote.items.length === 0) {
        list.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
            <div style="margin-bottom: 12px;">${getLucideIcon('sparkles', 'lucide-xl')}</div>
            <p style="font-weight: 500; font-size: 1rem;">Tu cotización está vacía</p>
            <p style="font-size: 0.85rem; margin-top: 6px;">Explora nuestros glampings, experiencias y paquetes y agrégalos con un solo clic.</p>
          </div>
        `;
      } else {
        list.innerHTML = state.quote.items.map(item => `
          <div class="quote-item-row">
            <div class="quote-item-details">
              <span class="quote-item-name">${item.name}</span>
              <span class="quote-item-meta">${formatCOP(item.price)} / ${item.unit}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 6px; background: var(--bg-card); border-radius: var(--radius-full); padding: 2px 8px; border: 1px solid var(--border-subtle);">
                <button class="btn-qty" data-action="dec" data-id="${item.id}" style="cursor: pointer; padding: 2px;">${getLucideIcon('minus')}</button>
                <span style="font-size: 0.84rem; font-weight: 700; min-width: 16px; text-align: center;">${item.qty}</span>
                <button class="btn-qty" data-action="inc" data-id="${item.id}" style="cursor: pointer; padding: 2px;">${getLucideIcon('plus')}</button>
              </div>
              <span class="quote-item-price">${formatCOP(item.subtotal)}</span>
              <button class="btn-remove" data-id="${item.id}" style="color: var(--text-muted); cursor: pointer;" title="Eliminar">${getLucideIcon('trash')}</button>
            </div>
          </div>
        `).join('');

        // Attach listeners for qty & remove
        list.querySelectorAll('.btn-qty').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const action = btn.getAttribute('data-action');
            updateItemQty(id, action === 'inc' ? 1 : -1);
          });
        });

        list.querySelectorAll('.btn-remove').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            removeItemFromQuote(id);
          });
        });
      }
    }
  };

  // Helper para construir el resumen estructurado de cotización
  const buildQuoteTextSummary = (validatedData) => {
    const total = calculateTotal();
    const guestName = validatedData?.name || document.getElementById('quoteGuestName')?.value || 'Huésped Interesado';
    const guestPhone = validatedData?.phone || document.getElementById('quoteGuestPhone')?.value || 'Sin especificar';
    const checkIn = validatedData?.dates?.inDate || document.getElementById('quoteCheckIn')?.value || 'Por definir';
    const checkOut = validatedData?.dates?.outDate || document.getElementById('quoteCheckOut')?.value || 'Por definir';
    const adults = document.getElementById('quoteAdults')?.value || '2';
    const notes = SecurityValidator.sanitizeNotes(document.getElementById('quoteNotes')?.value);

    let itemsText = state.quote.items.map(i => `• ${i.name} (x${i.qty}) -> ${formatCOP(i.subtotal)}`).join('\n');

    let msg = `✨ *SOLICITUD DE RESERVA - VILLA ELENA MIRADOR (PAIPA)* ✨\n\n`;
    msg += `👤 *Titular:* ${guestName}\n`;
    msg += `📱 *Teléfono:* ${guestPhone}\n`;
    msg += `🗓️ *Fechas:* ${checkIn} al ${checkOut}\n`;
    msg += `👥 *Ocupación:* ${adults} Adultos\n\n`;
    msg += `🌿 *DETALLE DE SERVICIOS COTIZADOS:*\n${itemsText}\n\n`;
    msg += `💰 *TOTAL ESTIMADO:* ${formatCOP(total)} COP\n`;
    if (notes.trim()) {
      msg += `📝 *Observaciones:* ${notes}\n`;
    }
    msg += `\nHola Villa Elena, deseo consultar disponibilidad y coordinar mi reserva conforme a la cotización generada en la web. ¡Gracias!`;

    return msg;
  };

  // Validación Integral de Formulario (Pilares 1, 3 y 4)
  const validateQuoteForm = () => {
    const errorBox = document.getElementById('quoteValidationError');
    if (errorBox) errorBox.style.display = 'none';

    if (state.quote.items.length === 0) {
      if (errorBox) {
        errorBox.textContent = 'Por favor selecciona al menos un glamping, pasadía o experiencia antes de solicitar la reserva.';
        errorBox.style.display = 'block';
      }
      return null;
    }

    const rawName = document.getElementById('quoteGuestName')?.value;
    const nameCheck = SecurityValidator.validateName(rawName);
    if (!nameCheck.valid) {
      if (errorBox) {
        errorBox.textContent = nameCheck.error;
        errorBox.style.display = 'block';
      }
      document.getElementById('quoteGuestName')?.focus();
      return null;
    }

    const rawPhone = document.getElementById('quoteGuestPhone')?.value;
    const phoneCheck = SecurityValidator.validatePhone(rawPhone);
    if (!phoneCheck.valid) {
      if (errorBox) {
        errorBox.textContent = phoneCheck.error;
        errorBox.style.display = 'block';
      }
      document.getElementById('quoteGuestPhone')?.focus();
      return null;
    }

    const rawIn = document.getElementById('quoteCheckIn')?.value;
    const rawOut = document.getElementById('quoteCheckOut')?.value;
    const dateCheck = SecurityValidator.validateDates(rawIn, rawOut);
    if (!dateCheck.valid) {
      if (errorBox) {
        errorBox.textContent = dateCheck.error;
        errorBox.style.display = 'block';
      }
      return null;
    }

    // Validación de Consentimiento Habeas Data (Pilar 4: Cumplimiento Ley 1581)
    const consentCheck = document.getElementById('consentHabeasData');
    if (consentCheck && !consentCheck.checked) {
      if (errorBox) {
        errorBox.textContent = 'Debe autorizar el tratamiento de datos personales conforme a la Ley 1581 de 2012 para proceder con la cotización.';
        errorBox.style.display = 'block';
      }
      consentCheck.focus();
      return null;
    }

    return {
      name: nameCheck.value,
      phone: phoneCheck.value,
      dates: dateCheck
    };
  };

  // WhatsApp Message Generator con mitigaciones de seguridad
  const generateWhatsAppReservation = () => {
    const validated = validateQuoteForm();
    if (!validated) return;

    const data = VILLA_ELENA_DATA.resortInfo;
    const msg = buildQuoteTextSummary(validated);
    const url = `https://api.whatsapp.com/send?phone=${data.whatsappFormatted}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  // Copia de Cotización al Portapapeles (Pilar 5: Alternativa ante caídas de WhatsApp)
  const copyQuoteSummary = () => {
    if (state.quote.items.length === 0) {
      showToast('Tu cotización está vacía.', 'info');
      return;
    }
    const validated = validateQuoteForm();
    if (!validated) return;

    const summaryText = buildQuoteTextSummary(validated);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(summaryText).then(() => {
        showToast('Resumen copiado al portapapeles con éxito.', 'check');
      }).catch(() => {
        fallbackCopyText(summaryText);
      });
    } else {
      fallbackCopyText(summaryText);
    }
  };

  const fallbackCopyText = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Resumen copiado al portapapeles.', 'check');
    } catch (err) {
      showToast('Por favor selecciona y copia el texto manualmente.', 'info');
    }
    document.body.removeChild(textArea);
  };

  // Derecho al Olvido y Purgado Seguro de Datos (Pilar 4: Privacidad)
  const clearLocalQuoteData = () => {
    if (confirm('¿Deseas eliminar permanentemente los datos de cotización guardados en este navegador?')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('villa_elena_quote');
      state.quote = {
        guestName: '',
        guestPhone: '',
        guestEmail: '',
        checkInDate: '',
        checkOutDate: '',
        adults: 2,
        children: 0,
        notes: '',
        items: []
      };
      const nameInput = document.getElementById('quoteGuestName');
      const phoneInput = document.getElementById('quoteGuestPhone');
      const notesInput = document.getElementById('quoteNotes');
      const errorBox = document.getElementById('quoteValidationError');
      if (nameInput) nameInput.value = '';
      if (phoneInput) phoneInput.value = '';
      if (notesInput) notesInput.value = '';
      if (errorBox) errorBox.style.display = 'none';

      updateQuoteUI();
      showToast('Datos locales eliminados con éxito (Derecho al Olvido).', 'trash');
    }
  };

  // Accommodations Renderer
  const renderAccommodations = () => {
    const container = document.getElementById('accommodationsGrid');
    if (!container) return;

    container.innerHTML = VILLA_ELENA_DATA.accommodations.map(acc => `
      <div class="atelier-card" id="card-${acc.id}">
        <div class="card-media">
          <img src="${acc.image}" alt="${acc.title}" class="card-img" loading="lazy" />
          <span class="card-badge">${acc.badge}</span>
          <span class="card-price-tag">${acc.priceFormatted} <small style="font-size: 0.72rem; font-weight: normal; color: var(--text-secondary);">/${acc.unit}</small></span>
        </div>
        <div class="card-body">
          <span class="card-category">${acc.category}</span>
          <h3 class="card-title">${acc.title}</h3>
          <p class="card-desc">${acc.description}</p>
          <ul class="card-amenities">
            ${acc.amenities.slice(0, 4).map(amenity => `
              <li class="amenity-item">
                ${getLucideIcon('check')}
                <span>${amenity}</span>
              </li>
            `).join('')}
          </ul>
          <div class="card-footer">
            <div style="font-size: 0.8rem; color: var(--text-secondary);">
              ${getLucideIcon('users')} <span>${acc.capacity}</span>
            </div>
            <button class="btn btn-primary btn-add-acc" data-id="${acc.id}" data-name="${acc.title}" data-price="${acc.price}" data-unit="${acc.unit}">
              ${getLucideIcon('plus')} <span>Añadir a Cotización</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-add-acc').forEach(btn => {
      btn.addEventListener('click', () => {
        addItemToQuote({
          id: btn.getAttribute('data-id'),
          name: btn.getAttribute('data-name'),
          price: parseInt(btn.getAttribute('data-price'), 10),
          category: 'alojamiento',
          unit: btn.getAttribute('data-unit')
        });
      });
    });
  };

  // Why Villa Elena Pasadía (Architectural Pillars) Renderer
  const renderWhyPasadia = () => {
    const container = document.getElementById('pasadiaPillarsContainer');
    if (!container || !VILLA_ELENA_DATA.whyVillaElenaPasadia) return;

    const data = VILLA_ELENA_DATA.whyVillaElenaPasadia;
    container.innerHTML = data.pillars.map(pillar => `
      <div class="pasadia-pillar-card">
        <div class="pasadia-pillar-icon">
          ${getLucideIcon(pillar.icon)}
        </div>
        <h3 class="pasadia-pillar-title">${pillar.title}</h3>
        <p class="pasadia-pillar-desc">${pillar.desc}</p>
      </div>
    `).join('');
  };

  // Day Passes (Pasadías Diferentes) Renderer
  const renderDayPasses = () => {
    const container = document.getElementById('dayPassesGrid');
    if (!container || !VILLA_ELENA_DATA.dayPasses) return;

    container.innerHTML = VILLA_ELENA_DATA.dayPasses.map(dp => `
      <div class="atelier-card" id="card-${dp.id}">
        <div class="card-media">
          <img src="${dp.image}" alt="${dp.title}" class="card-img" loading="lazy" />
          <span class="card-badge">${dp.badge}</span>
          <span class="card-price-tag">${dp.priceFormatted} <small style="font-size: 0.72rem; font-weight: normal; color: var(--text-secondary);">/${dp.unit}</small></span>
        </div>
        <div class="card-body">
          <span class="card-category">${dp.category}</span>
          <h3 class="card-title">${dp.title}</h3>
          <p class="card-desc" style="margin-bottom: 12px;">${dp.subtitle}</p>

          <div class="pasadia-hours-badge">
            ${getLucideIcon('clock')}
            <span>${dp.hours}</span>
          </div>

          <div class="pasadia-why-box">
            <strong>Experiencia Diferencial:</strong>
            ${dp.whyUnique}
          </div>

          <ul class="card-amenities">
            ${dp.includes.map(inc => `
              <li class="amenity-item">
                ${getLucideIcon('check')}
                <span>${inc}</span>
              </li>
            `).join('')}
          </ul>

          <div class="card-footer">
            <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">
              ${getLucideIcon('shield-check')} Aforo Exclusivo
            </span>
            <button class="btn btn-primary btn-add-dp"
              data-id="${dp.id}"
              data-name="${dp.title}"
              data-price="${dp.price}"
              data-unit="${dp.unit}">
              ${getLucideIcon('plus')} <span>Añadir a Cotización</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-add-dp').forEach(btn => {
      btn.addEventListener('click', () => {
        addItemToQuote({
          id: btn.getAttribute('data-id'),
          name: btn.getAttribute('data-name'),
          price: parseInt(btn.getAttribute('data-price'), 10),
          category: 'pasadia',
          unit: btn.getAttribute('data-unit')
        });
      });
    });
  };

  // Experiences Renderer with Filter Tabs
  const renderExperiences = () => {
    const container = document.getElementById('experiencesGrid');
    if (!container) return;

    const filtered = state.selectedFilter === 'all'
      ? VILLA_ELENA_DATA.experiences
      : VILLA_ELENA_DATA.experiences.filter(e => e.category === state.selectedFilter);

    container.innerHTML = filtered.map(exp => `
      <div class="atelier-card" id="card-${exp.id}">
        <div class="card-media">
          <img src="${exp.image}" alt="${exp.title}" class="card-img" loading="lazy" />
          <span class="card-badge">${exp.highlight}</span>
          <span class="card-price-tag">${exp.priceFormatted} <small style="font-size: 0.72rem; font-weight: normal; color: var(--text-secondary);">/${exp.unit}</small></span>
        </div>
        <div class="card-body">
          <span class="card-category">${exp.categoryLabel}</span>
          <h3 class="card-title">${exp.title}</h3>
          <p class="card-desc">${exp.description}</p>
          <div style="display: flex; gap: 16px; margin-bottom: 16px; font-size: 0.82rem; color: var(--text-muted);">
            <span>${getLucideIcon('clock')} ${exp.duration}</span>
            <span>${getLucideIcon('activity')} ${exp.intensity}</span>
          </div>
          <div class="card-footer">
            <span style="font-size: 0.82rem; color: var(--accent-forest); font-weight: 600;">Experiencia Guiada</span>
            <button class="btn btn-secondary btn-add-exp" data-id="${exp.id}" data-name="${exp.title}" data-price="${exp.price}" data-unit="${exp.unit}">
              ${getLucideIcon('plus')} <span>Añadir</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-add-exp').forEach(btn => {
      btn.addEventListener('click', () => {
        addItemToQuote({
          id: btn.getAttribute('data-id'),
          name: btn.getAttribute('data-name'),
          price: parseInt(btn.getAttribute('data-price'), 10),
          category: 'experiencia',
          unit: btn.getAttribute('data-unit')
        });
      });
    });
  };

  // 24h Packages Renderer
  const renderPackages = () => {
    const container = document.getElementById('packagesContainer');
    if (!container) return;

    container.innerHTML = VILLA_ELENA_DATA.packages24h.map(pkg => `
      <div class="package-card" id="pkg-${pkg.id}">
        <div class="package-header">
          <div>
            <span class="package-tag">${getLucideIcon('sparkles')} ${pkg.savingBadge}</span>
            <h3 class="package-name">${pkg.name}</h3>
            <p class="package-subtitle">${pkg.subtitle}</p>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 6px;">${pkg.target}</p>
          </div>
          <div class="package-pricing">
            <div class="price-main">${pkg.priceFormatted}</div>
            <div class="price-sub">${pkg.unit}</div>
            <button class="btn btn-primary btn-add-pkg" style="margin-top: 14px;" data-id="${pkg.id}" data-name="${pkg.name}" data-price="${pkg.price}" data-unit="${pkg.unit}">
              ${getLucideIcon('plus')} <span>Elegir Paquete Completo</span>
            </button>
          </div>
        </div>
        <div class="timeline">
          ${pkg.itinerary.map(step => `
            <div class="timeline-step">
              <span class="step-time">${step.time}</span>
              <h4 class="step-title">${step.title}</h4>
              <p class="step-desc">${step.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-add-pkg').forEach(btn => {
      btn.addEventListener('click', () => {
        addItemToQuote({
          id: btn.getAttribute('data-id'),
          name: btn.getAttribute('data-name'),
          price: parseInt(btn.getAttribute('data-price'), 10),
          category: 'paquete-24h',
          unit: btn.getAttribute('data-unit')
        });
      });
    });
  };

  // BBQ & Mise en Place Renderer
  const renderBBQ = () => {
    const tableBody = document.getElementById('bbqIngredientsBody');
    const tiersContainer = document.getElementById('bbqTiersContainer');
    const bbq = VILLA_ELENA_DATA.bbqExperience;

    if (tableBody) {
      tableBody.innerHTML = bbq.ingredients.map(ing => `
        <tr>
          <td style="font-weight: 600; color: var(--text-primary);">${ing.item}</td>
          <td style="color: var(--text-secondary);">${ing.detail}</td>
        </tr>
      `).join('');
    }

    if (tiersContainer) {
      tiersContainer.innerHTML = bbq.groupPackages.map(tier => `
        <div class="group-tier-card">
          <span class="tier-people">Para ${tier.people} Personas</span>
          <span class="tier-price">${tier.priceFormatted}</span>
          <span class="tier-per-person">${tier.perPerson}</span>
          <button class="btn btn-secondary btn-add-bbq" style="margin-top: 14px; font-size: 0.8rem; padding: 8px 16px;"
            data-id="bbq-grupo-${tier.people}"
            data-name="Mise en Place BBQ (${tier.people} personas)"
            data-price="${tier.price}">
            ${getLucideIcon('plus')} <span>Añadir Asado</span>
          </button>
        </div>
      `).join('');

      tiersContainer.querySelectorAll('.btn-add-bbq').forEach(btn => {
        btn.addEventListener('click', () => {
          addItemToQuote({
            id: btn.getAttribute('data-id'),
            name: btn.getAttribute('data-name'),
            price: parseInt(btn.getAttribute('data-price'), 10),
            category: 'bbq',
            unit: 'paquete asado'
          });
        });
      });
    }
  };

  // Gallery Renderer
  const renderGallery = () => {
    const container = document.getElementById('galleryGrid');
    if (!container) return;

    container.innerHTML = VILLA_ELENA_DATA.gallery.map(img => `
      <div class="gallery-item">
        <img src="${img.src}" alt="${img.title}" class="gallery-img" loading="lazy" />
        <div class="gallery-caption">
          <span style="font-size: 0.95rem; font-weight: 600;">${img.title}</span>
        </div>
      </div>
    `).join('');
  };

  // FAQ Accordion Renderer
  const renderFAQs = () => {
    const container = document.getElementById('faqContainer');
    if (!container) return;

    container.innerHTML = VILLA_ELENA_DATA.faqs.map(faq => `
      <div class="faq-card">
        <button class="faq-question">
          <span>${faq.q}</span>
          ${getLucideIcon('chevron-down')}
        </button>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.faq-card').forEach(card => {
      const q = card.querySelector('.faq-question');
      q.addEventListener('click', () => {
        const wasOpen = card.classList.contains('open');
        container.querySelectorAll('.faq-card').forEach(c => c.classList.remove('open'));
        if (!wasOpen) card.classList.add('open');
      });
    });
  };

  // Fast Booking Bar Listener
  const setupQuickbar = () => {
    const quickBtn = document.getElementById('quickbarCheckBtn');
    if (!quickBtn) return;

    quickBtn.addEventListener('click', () => {
      const checkIn = document.getElementById('quickCheckIn')?.value;
      const checkOut = document.getElementById('quickCheckOut')?.value;
      const guests = document.getElementById('quickGuests')?.value;

      if (checkIn) {
        state.quote.checkInDate = checkIn;
        const drawerCheckIn = document.getElementById('quoteCheckIn');
        if (drawerCheckIn) drawerCheckIn.value = checkIn;
      }
      if (checkOut) {
        state.quote.checkOutDate = checkOut;
        const drawerCheckOut = document.getElementById('quoteCheckOut');
        if (drawerCheckOut) drawerCheckOut.value = checkOut;
      }
      if (guests) {
        state.quote.adults = parseInt(guests, 10);
        const drawerAdults = document.getElementById('quoteAdults');
        if (drawerAdults) drawerAdults.value = guests;
      }

      saveQuoteToStorage();

      // Smooth scroll to accommodations
      const target = document.getElementById('alojamiento');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        showToast('Fechas actualizadas. Elige tu carpa o glamping preferido.');
      }
    });
  };

  // Setup Drawer Controls
  const setupDrawer = () => {
    const backdrop = document.getElementById('quoteDrawerBackdrop');
    const openBtns = [
      document.getElementById('openQuoteBtn'),
      document.getElementById('floatingQuotePill')
    ];
    const closeBtn = document.getElementById('closeQuoteDrawerBtn');
    const sendWABtn = document.getElementById('btnSubmitWhatsApp');
    const copyBtn = document.getElementById('btnCopyQuoteSummary');
    const clearBtn = document.getElementById('btnClearLocalQuote');

    openBtns.forEach(btn => {
      if (btn) btn.addEventListener('click', () => {
        backdrop?.classList.add('active');
      });
    });

    closeBtn?.addEventListener('click', () => {
      backdrop?.classList.remove('active');
    });

    backdrop?.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('active');
    });

    sendWABtn?.addEventListener('click', () => {
      generateWhatsAppReservation();
    });

    copyBtn?.addEventListener('click', () => {
      copyQuoteSummary();
    });

    clearBtn?.addEventListener('click', () => {
      clearLocalQuoteData();
    });
  };

  // Setup Privacy Modal Controls (Habeas Data - Ley 1581 de 2012)
  const setupPrivacyModal = () => {
    const backdrop = document.getElementById('privacyModalBackdrop');
    const openBtns = [
      document.getElementById('openPrivacyPolicyBtn'),
      document.getElementById('footerPrivacyBtn')
    ];
    const closeBtn = document.getElementById('closePrivacyModalBtn');
    const acceptBtn = document.getElementById('acceptPrivacyBtn');

    if (!backdrop) return;

    const openModal = (e) => {
      if (e) e.preventDefault();
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    openBtns.forEach(btn => {
      if (btn) btn.addEventListener('click', openModal);
    });

    closeBtn?.addEventListener('click', closeModal);
    acceptBtn?.addEventListener('click', () => {
      const consentCheck = document.getElementById('consentHabeasData');
      if (consentCheck) consentCheck.checked = true;
      closeModal();
      showToast('Autorización de tratamiento de datos confirmada.', 'shield-check');
    });

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closeModal();
      }
    });
  };

  // Setup Filter Tabs
  const setupFilters = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedFilter = btn.getAttribute('data-filter') || 'all';
        renderExperiences();
      });
    });
  };

  // Setup Mobile Nav Toggle
  const setupMobileNav = () => {
    const toggle = document.getElementById('mobileNavToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const isShown = links.style.display === 'flex';
        links.style.display = isShown ? 'none' : 'flex';
        if (!isShown) {
          links.style.flexDirection = 'column';
          links.style.position = 'absolute';
          links.style.top = '80px';
          links.style.left = '0';
          links.style.right = '0';
          links.style.background = 'var(--bg-card)';
          links.style.padding = '24px';
          links.style.borderBottom = '1px solid var(--border-subtle)';
        }
      });
    }
  };

  // Setup Drone Video Modal Controls
  const setupDroneVideoModal = () => {
    const backdrop = document.getElementById('videoModalBackdrop');
    const openBtn = document.getElementById('openDroneVideoBtn');
    const closeBtn = document.getElementById('closeVideoModalBtn');
    const bookBtn = document.getElementById('videoModalBookBtn');
    const player = document.getElementById('droneVideoPlayer');
    const quoteBackdrop = document.getElementById('quoteDrawerBackdrop');

    if (!backdrop || !player) return;

    const openVideo = () => {
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      try {
        player.currentTime = 0;
        player.play().catch(e => console.log('Autoplay handled', e));
      } catch (err) {
        console.warn(err);
      }
    };

    const closeVideo = () => {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
      try {
        player.pause();
      } catch (err) {
        console.warn(err);
      }
    };

    if (openBtn) {
      openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openVideo();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeVideo);
    }

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeVideo();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closeVideo();
      }
    });

    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        closeVideo();
        if (quoteBackdrop) {
          quoteBackdrop.classList.add('active');
        }
      });
    }
  };

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'light' ? 'dark' : 'light');
      });
    }

    renderAccommodations();
    renderWhyPasadia();
    renderDayPasses();
    renderExperiences();
    renderPackages();
    renderBBQ();
    renderGallery();
    renderFAQs();
    setupQuickbar();
    setupDrawer();
    setupDroneVideoModal();
    setupPrivacyModal();
    setupFilters();
    setupMobileNav();
    updateQuoteUI();

    // Default dates (today and tomorrow)
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const quickIn = document.getElementById('quickCheckIn');
    const quickOut = document.getElementById('quickCheckOut');
    if (quickIn && !quickIn.value) quickIn.value = today;
    if (quickOut && !quickOut.value) quickOut.value = tomorrow;
  });

})();
