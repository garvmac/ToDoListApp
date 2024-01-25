new Vue({
    el: '#tasklist',
    data: { 
        title: 'to do list',
        newTask: '',
        tasks: []
    },
    mounted() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    },
    methods: {
        addTask: function() {
            if (!this.tasks.name) {
                return
            }
            this.tasks.push ({
                name: this.tasks.name,
                del: ''
            });
            this.tasks.name = "";
            this.saveTasks();
        },
        deleteTask: function (task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
            this.saveTasks();
        },
        deleteAlert: function (message, event) {
            if (event) {
                event.preventDefault()
              }
            alert(message)
        },
        saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
})

