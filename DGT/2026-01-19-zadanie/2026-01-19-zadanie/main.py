from browser import document
from browser.local_storage import storage
import json

inp = document["inp_item"]
btn_add = document["btn_add"]
btn_clear = document["btn_clear"]
btn_last = document["btn_last"]
out = document["out"]

# Stav aplikácie (zoznam položiek)
items = []  # po načítaní sa prepíše load()


def render():
    if len(items) == 0:
        out.html = "<em>Zoznam je prázdny.</em>"
        return

    html = "<ul>"
    for it in items:
        html += f"<li>{it}</li>"
    html += "</ul>"
    out.html = html


# Checkpoint 3: save()
def save():
    # uloží items do localStorage ako JSON
    storage["todo_items"] = json.dumps(items)


# Checkpoint 4: load()
def load():
    # ak v localStorage nič nie je, vráti prázdny zoznam
    if "todo_items" not in storage:
        return []

    try:
        return json.loads(storage["todo_items"])
    except:
        return []


def add_item(ev):
    text = inp.value.strip()
    if text == "":
        out.html = "<em>Najprv napíš položku.</em>"
        return

    items.append(text)
    inp.value = ""
    render()
    save()  # Checkpoint 5


def clear_all(ev):
    items.clear()
    render()
    save()  # Checkpoint 5


def remove_last(ev):
    # Checkpoint 6
    if len(items) == 0:
        out.html = "<em>Nie je čo vymazať.</em>"
        return

    items.pop()
    render()
    save()


btn_add.bind("click", add_item)
btn_clear.bind("click", clear_all)
btn_last.bind("click", remove_last)

# načítanie dát pri štarte
items = load()
render()
