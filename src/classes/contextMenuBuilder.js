const Discord = require('discord.js');
const types = {
    "MESSAGE": 3,
    "USER": 2,
    "SLASH_COMMAND": 1
}
const typeArray = ["MESSAGE", "USER"]

class ContextMenuBuilder {
    /**
     * 
     * @param {Object} data 
     * @param {String} [data.name]
     * @param {"MESSAGE"|"USER"} [data.type]
     * @param {Boolean} [data.default_permission]
     */
    constructor(data){
        /**
         * The data for the context menu.
         */
        this.data = {
            name: data?.name||null,
            type: types[data?.type]||null,
            default_permission: data?.default_permission||true
        }
    }

    /**
     * Set the context menu `default_permission`.
     * @param {Boolean} v 
     * @returns {ContextMenuBuilder}
     */
    setDefaultPermission(v){
        if(typeof v !== "boolean") throw new TypeError("v must be a boolean")
        if(![true, false].includes(v)) throw new TypeError("v is a required arg")
        this.data.default_permission = v
        return this;
    }

    /**
     * Set the context menu name.
     * @param {String} name 
     * @returns {ContextMenuBuilder}
     */
    setName(name){
        if(typeof name !== "string") throw new TypeError("name must be a string")
        if(!name) throw new TypeError("name is a required arg")
        this.data.name = name
        return this;
    }

    /**
     * Sets the context menu types.
     * @param {"MESSAGE" | "USER"} type 
     * @returns {ContextMenuBuilder}
     */
    setType(type){
        if(!typeArray.includes(type)) throw new TypeError("type is not a valid ContextMenuBuilder type")
        if(typeof type !== "string") throw new TypeError("type must be a string")
        let t
        if(type === "MESSAGE"){
            t = 3
        } else if(type === "USER"){
            t = 2
        }
        this.data.type = t

        return this;
    }

    /**
     * Returns the context menu JSON for Discord.
     */
    toJSON(){
        return this.data
    }
}

module.exports = ContextMenuBuilder;