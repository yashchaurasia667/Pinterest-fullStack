# <div class="card">
#     <img src="" alt="post">
#     <div class="Caption">
#         caption
#     </div>
# </div>

with open('img.txt', 'w') as f:
    pass
for i in range(19):
    with open('img.txt', 'a') as f:
        f.write(f'<div class="card">\n<img src="/images/feed/{i+1}.jepg" alt="post">\n<div class="Caption">\ncaption\n</div>\n</div>\n')