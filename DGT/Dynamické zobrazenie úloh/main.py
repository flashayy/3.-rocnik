from browser import document, html

tasks = [   
    {"title": "Finish Homework", "done": False, "priority": "low"},      
    {"title": "Feed the dog", "done": True, "priority": "mid"},    
    {"title": "Take the trash out", "done": False, "priority": "high"}   
] 

def list_tasks():
    my_div = document["tasks"]
    my_div.clear()
    tab = html.TABLE(Class = "task-table")
    header = html.TR([html.TH("Task"), html.TH("Finished"), html.TH("Priority")])
    tab <= header
    
    for t in tasks:
        row = html.TR()
        row <= html.TD(t["title"])
        row <= html.TD("OK" if t["done"] else "TBD")
        row <= html.TD(t["priority"])
        tab <= row
        
    my_div <= tab
    
def add_task(ev):
    title = document["new_task"].value
    priority = document["set_priority"].value
    if title:
        tasks.append({"title": title, "done": False, "priority": priority})
        document["new_task"].value = ""
        list_tasks()
    
document["add_btn"].bind("click", add_task)

list_tasks()