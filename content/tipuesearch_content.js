var tipuesearch = {"pages": [{'title': '關於', 'text': '此內容管理系統以\xa0  https://github.com/mdecourse/cmsimde  \xa0作為子模塊運作，可以更改對應的版本運作，cmsimde可以持續改版，不會影響之前設置子模塊，使用舊版cmsimde模組的內容管理相關運作。 \n 利用cmsimde建立靜態網誌方法： \n 1.在github建立倉儲，git clone到近端 \n 2.參考\xa0  https://github.com/mdecourse/newcms ，加入除cmsimde目錄外的所有內容 \n 以git子模塊添加\xa0  https://github.com/mdecourse/cmsimde  \xa0cmsimde \n 建立cmsimde目錄，並從github取下子模組內容。 \n 3.在近端維護時，將目錄切換到倉儲中的cmsimde，以python wsgi.py啟動近端網際伺服器。 \n 動態內容編輯完成後，以generate_pages轉為靜態內容，以git add commit以及push將內容推到更長。 \n 4.之後若要以git clone取下包含submodule的所有內容，執行： \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': '關於.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'Week1~5', 'text': '1.登入自己的github帳戶，並且創建名為cd2020的個人倉儲。 \n 2.進入存放的資料夾例如;tmp \n 3.在小黑窗上打上git clone\xa0https://github.com/s學號/cd2020。 \n 4.git submodule add https://github.com/mdecourse/cmsimde.git。 \n 5.完成後使用cd cd2020 ->cd cmsimde進入cmsimde的資料夾內。 \n 6.完成之後使用python wsgi.py進入靜態9443內編輯個人網站的資料。 \n 7.使用git add .\xa0 -> commit -m ＂標題＂ -> git push將剛剛編輯好的東西上傳。 \n 8.進入個人倉儲的setting中更改branch(分支)至master。 \n', 'tags': '', 'url': 'Week1~5.html'}, {'title': 'Week6~9', 'text': '分工內容: \n topic0: 40723237 40723221 40723222 40723228 40723243 40723244 40723236 40623117 \n topic1: 40723221 40723222 40623252 40523253 40723249 40732331 40723240 40723237 \n \n', 'tags': '', 'url': 'Week6~9.html'}, {'title': 'Week10~14', 'text': '', 'tags': '', 'url': 'Week10~14.html'}, {'title': 'Week15~18', 'text': '', 'tags': '', 'url': 'Week15~18.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};