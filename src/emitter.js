class Emitter {
    constructor() {
      this.id = 0;
      this.eventCollection = [/*{id, eventType, fn}*/];
    }

    subscribe(eventType, fn) {
      console.log('subscribing');
      this.id ++;
      this.eventCollection.push({id: this.id, eventType, fn});
      const binder = this.unSubcribeFromCollection.bind(this);
      return {
        eID: this.id,
        release: function() {
            binder(this.eID);
        }
      };
    }

    // validate the event type was subscribe and then call
    emit(eventType,...arg) {
      const event = this.getEvent(eventType);
      if (event.length) {
        for (let i = 0; i < event.length; i++) {
          event[i].fn.call(null, ...arg);
        }
      }
    }

    // return {array}
    getEvent(type) {
      return this.eventCollection.filter((e) => e.eventType === type);
    }

    // remove
    unSubcribeFromCollection(id){
      const eventIndex = this.eventCollection.findIndex((item) => item.id === id);
      if (eventIndex) {
        this.eventCollection.splice(id-1, 1);
      }
    }
  }

export default Emitter;