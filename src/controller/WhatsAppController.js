class WhatsAppController
{
    constructor()
    {
        console.log('WhatsAppController ok')


        //metodos
        this.elementesPrototype()
        this.loadElements()
        this.initEvents()
    }

    //controle dos elementos (liga/desliga)

    loadElements()
    {

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => 
        {
            this.el[Format.getCamelCase(element.id)] = element
        });
    }

    elementesPrototype()
    {
        Element.prototype.hide = function()
        {
            this.style.display = 'none'

        }

        Element.prototype.show = function()
        {
            this.style.display = 'block'

        }

        Element.prototype.toggle = function()
        {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none'

        }

        //evento de click
        Element.prototype.on = function(events, fn)
        {
            events.split(' ').forEach(event=>
            {
                this.addEventListener(event, fn)
            })

        }

        //mudando o css
        Element.prototype.css = function(styles)
        {
            for (let name in styles)
            {
                this.style[name] = styles[name]
            }
        }

        // "CRUD" de classes
        Element.prototype.addClasse = function(name)
        {
            this.classList.add(name)
        }

        Element.prototype.removeClasse = function(name)
        {
            this.classList.remove(name)
        }

        Element.prototype.toggleClasse = function(name)
        {
            this.classList.toggle(name)
        }

        Element.prototype.hasClasse = function(name)
        {
            this.classList.contains(name)
        }

        
    }

    //gerindo eventos(foto, contato)
    initEvents()
    {
        this.el.myPhoto.on('click', e=>
        {
            this.el.panelAddProfile.show()
        })

        this.el.btnNewContact.on('click', e=>
        {
            this.el.panelAddContact.addClass('open')
        })
    }
}