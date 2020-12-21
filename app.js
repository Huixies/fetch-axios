new Vue({
    el: '#one',
    data() {
        return {
            todos: [],
            todo: {
                title: ""     
            }
        }
    },
    mounted() {
        // fetch('http://jsonplaceholder.typicode.com/posts')
        //     .then(res => { return res.json() })
        //     .then(todos => this.todos = todos)     
        axios.get('http://jsonplaceholder.typicode.com/posts').then(
            res => {
                this.todos = res.data;
            }
        )
    },
    methods: {
        onSubmit() {
            // fetch('http://jsonplaceholder.typicode.com/posts', {
            //     method: 'POST',
            //     body: JSON.stringify(this.todo),
            //     headers: {
            //         'Content-Type':'application/json'
            //     }
            // }).then(
            //     res => {
            //         return res.json();
            //     }
            // ).then(
            //     todo => {
            //         this.todos.push(todo)
            //     }
            // )
            axios.post('http://jsonplaceholder.typicode.com/posts', this.todo)
                .then(res => {
                    this.todos.unshift(res.data);
            })
        }
    }
})