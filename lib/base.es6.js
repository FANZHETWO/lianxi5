class Base {
    constructor() {
        this.test = 'test'
    }
    on(val, cb) {
        let temp = val;
        if (temp === 'test') {
            cb && cb('hello world')
        } else {
            cb && cb()
        }
    }
    trigger(...val) {
        return arguments
    }
}



module.exports = Base