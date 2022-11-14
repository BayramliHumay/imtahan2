class Message{
    constructor(messageName,messageText){
        this.messageName = messageName;
        this.time = new Date();
        this.messageText = messageText;
    }
    toString() {
        let hourStr = this.time.getHours() > 9 ?this.time.getHours(): `0${this.time.getHours()}`;
        let minuteStr = this.time.getMinutes() > 9 ?this.time.getMinutes(): `0${this.time.getMinutes()}`;
    
      return `${hourStr}:${minuteStr}${this.messageName}:${this.messageText}`;
    }
}
 class Messager{
    constructor(){
        this._messages =[];
    }
    show_history(){
        for(let i in this._messages){
            console.log(this._messages[i].toString());
        }
    }
    send(author,text){
        this._messages.push(new Message(author,text))
    }
 }
 let messenger = new Messager()
 messenger.send('Humay','ilk mesaj')
 messenger.send('Sevil','ikinci mesaj')
 messenger.show_history()