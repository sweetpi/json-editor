JSONEditor.defaults.themes.jquerymobile = JSONEditor.AbstractTheme.extend({
  getTable: function() {
    var el = this._super();
    el.setAttribute('cellpadding',5);
    el.setAttribute('cellspacing',0);
    return el;
  },
  getTableHeaderCell: function(text) {
    var el = this._super(text);
    el.className = 'ui-state-active';
    el.style.fontWeight = 'bold';
    return el;
  },
  getTableCell: function() {
    var el = this._super();
    el.className = 'ui-widget-content';
    return el;
  },
  getHeaderButtonHolder: function() {
    var el = this.getButtonHolder();
    el.style.marginLeft = '10px';
    el.style.fontSize = '.6em';
    el.style.display = 'inline-block';
    return el;
  },
  getFormControl: function(label, input, description) {
    var el = document.createElement('div');
    el.className = 'ui-field-contain';
    if(label) el.appendChild(label);
    if(input.type === 'checkbox') {
      label.insertBefore(input,label.firstChild);
    }
    else {
      el.appendChild(input);
    }
    
    if(description) el.appendChild(description);
    return el;
  },
  getDescription: function(text) {
    var el = document.createElement('legend');
    el.style.fontSize = '.8em';
    el.style.fontStyle = 'italic';
    el.style.paddingTop = '10px';
    el.textContent = text;
    return el;
  },
  getButtonHolder: function() {
    var el = document.createElement('div');
    el.className = 'ui-controlgroup ui-controlgroup-horizontal ui-mini ui-corner-all';
    var inner = document.createElement('div');
    inner.className = 'ui-controlgroup-controls';
    el.appendChild(inner);
    return el;
  },
  appendButtonToButtonHolder: function(holder, button) {
    holder.firstChild.appendChild(button);
    //jQuery(holder).controlgroup({ mini: true });
  },
  getFormInputLabel: function(text) {
    var el = document.createElement('label');
    el.textContent = text;
    return el;
  },
  getButton: function(text, icon, title) {
    var button = document.createElement("button");
    button.className = 'ui-btn ui-btn-inline ';

    // Icon only
    if(icon && !text) {
      button.className += ' ui-btn-icon-notext ui-corner-all';
      //icon.className += ' ui-button-icon-primary ui-icon-primary';
      //button.appendChild(icon);
    }
    // Icon and Text
    else if(icon) {
      button.className += ' ui-btn-icon-left';
      //icon.className += ' ui-button-icon-primary ui-icon-primary';
      //button.appendChild(icon);
    }
    // Text only
    else {
      /*nop*/
    }

    button.textContent = text||title||".";
    button.setAttribute('title',title);
    
    return button;
  },
  setButtonText: function(button,text, icon, title) {
    button.innerHTML = '';
    button.className = 'ui-btn ui-btn-inline ';

    // Icon only
    if(icon && !text) {
      button.className += ' ui-btn-icon-notext ui-corner-all';
      //icon.className += ' ui-button-icon-primary ui-icon-primary';
      //button.appendChild(icon);
    }
    // Icon and Text
    else if(icon) {
      button.className += ' ui-btn-icon-left';
      //icon.className += ' ui-button-icon-primary ui-icon-primary';
      //button.appendChild(icon);
    }
    // Text only
    else {
      /*nop*/
    }

    button.textContent = text||title||".";
    button.setAttribute('title',title);
  },
  getHeader: function(text) {
    var el = document.createElement('h3');
    el.className = 'ui-bar ui-bar-a ui-corner-all';
    if(typeof text === "string") {
      el.textContent = text;
    }
    else {
      el.appendChild(text);
    }
    
    return el;
  },
  getIndentedPanel: function() {
    var el = document.createElement('div');
    el.className = 'ui-body ui-body-a ui-corner-all';
    //el.style.padding = '1em 1.4em';
    return el;
  },
  afterInputReady: function(input) {
    controlgroup = this.closest(input,'.ui-controlgroup-controls');
    switch(input.type) {
      case 'select-one':
        try {
          jQuery(input).selectmenu({ inline: true });
        } catch(e) {
            //ignore silently
        }
        break;
      case 'text':
        try {
          jQuery(input).textinput();
        } catch(e) {
          //ignore silently
        }
        break;
    }
  },
  addInputError: function(input,text) {
    if(!input.controls) return;
    if(!input.errmsg) {
      input.errmsg = document.createElement('div');
      input.errmsg.className = 'ui-state-error';
      input.controls.appendChild(input.errmsg);
    }
    else {
      input.errmsg.style.display = '';
    }

    input.errmsg.textContent = text;
  },
  removeInputError: function(input) {
    if(!input.errmsg) return;
    input.errmsg.style.display = 'none';
  },
  markTabActive: function(tab) {
    tab.className = tab.className.replace(/\s*ui-widget-header/g,'')+' ui-state-active';
  },
  markTabInactive: function(tab) {
    tab.className = tab.className.replace(/\s*ui-state-active/g,'')+' ui-widget-header';
  }
});
