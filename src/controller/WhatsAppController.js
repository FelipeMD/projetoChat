class WhatsAppController
{
    constructor()
    {
        console.log('WhatsAppController ok')

        this.elementesPrototype()
        this.loadElements()
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

        Element.prototype.on = function(events, fn)
        {
            events.split(' ').forEach(event=>
            {
                this.addEventListener(event, fn)
            })
            
            
        }
    }
}   