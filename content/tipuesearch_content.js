var tipuesearch = {"pages": [{'title': '關於', 'text': '此內容管理系統以\xa0  https://github.com/mdecourse/cmsimde  \xa0作為子模塊運作，可以更改對應的版本運作，cmsimde可以持續改版，不會影響之前設置子模塊，使用舊版cmsimde模組的內容管理相關運作。 \n 利用cmsimde建立靜態網誌方法： \n 1.在github建立倉儲，git clone到近端.. \n 2.參考\xa0  https://github.com/mdecourse/newcms ，加入除cmsimde目錄外的所有內容 \n 以git子模塊添加\xa0  https://github.com/mdecourse/cmsimde  \xa0cmsimde \n 建立cmsimde目錄，並從github取下子模組內容。 \n 3.在近端維護時，將目錄切換到倉儲中的cmsimde，以python wsgi.py啟動近端網際伺服器。 \n 動態內容編輯完成後，以generate_pages轉為靜態內容，以git add commit以及push將內容推到更長。 \n 4.之後若要以git clone取下包含submodule的所有內容，執行： \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': '關於.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'Week1~5', 'text': '1.登入自己的github帳戶，並且創建名為cd2020的個人倉儲。 \n 2.進入存放的資料夾例如;tmp \n 3.在小黑窗上打上git clone\xa0https://github.com/s學號/cd2020。 \n 4.git submodule add https://github.com/mdecourse/cmsimde.git。 \n 5.完成後使用cd cd2020 ->cd cmsimde進入cmsimde的資料夾內。 \n 6.完成之後使用python wsgi.py進入靜態9443內編輯個人網站的資料。 \n 7.使用git add .\xa0 -> commit -m ＂標題＂ -> git push將剛剛編輯好的東西上傳。 \n 8.進入個人倉儲的setting中更改branch(分支)至master。 \n \n 更新可攜裝置中的python的版本更新至3.8.2 \n 1.至python官網 \n https://www.python.org/downloads/windows/ Windows x86-64 executable installer 安裝至自己可攜系統(把pip的選項去掉)。 \n .使用批次檔更改開始路徑 (名稱不必更改) \n 執行get-pip.py安裝管理工具接下來 執行pip install指令後將 pip install\xa0 Flask/ pip install\xa0 Markdown/ pip install\xa0 lxml /pip install\xa0 bs4 /pip install\xa0 flask_cors /pip install\xa0 pelican /pip install\xa0 leo 下載下來 \n 直播內容: \n \n \n \n', 'tags': '', 'url': 'Week1~5.html'}, {'title': 'Week6-9', 'text': '\n 分工內容: \n topic0: 40723237 40723221 40723222 40723228 40723243 40723244 40723236 40623117 \n topic1: 40723221 40723222 40623252 40523253 40723249 40732331 40723240 40723237 \n \n \n OBS Studio 是個免費且開放原始碼的影音串流直播工具 （OBS 全名為 Open Broadcaster Software） 可支援 YouTube, YouTube Gaming, Twitch, Facebook Live, Smashcast, DailyMotion, Twitter…等三十多個影音平台與直播服務讓我們輕鬆將電腦中的影片、視窗畫面、遊戲畫面或攝影機、麥克風等裝置的即時影像與內容轉播出去。 \n OBS Studio 的使用方法很簡單， \n \n 我們可以設定多個不同的「場景」每個場景可以事先安排好要顯示哪些圖檔、字幕、影片或擷取哪些輸入裝置或軟體、遊戲的視窗等畫面按下「開始串流」按鈕後即可將你安排的內容即時傳輸到指定的直播平台（如 YouTube 或 Twitch）邊直播還可邊透過麥克風講話或透過 Webcam 拍攝現場畫面。開始直播後任何人只要開啟直播頻道的網址就能馬上看到你精心安排的影音內容。 https://briian.com/47680/ \n We can set a number of different "scenes". Each scene can be arranged in advance which graphics files, subtitles, videos or input devices or software to capture, the game window, etc. Press the "start streaming" button You can transfer the content you arranged to the designated live broadcast platform (such as YouTube or Twitch) in real time while broadcasting live. You can also talk through the microphone or take live pictures through the Webcam. After starting the live broadcast, anyone can open the URL of the live broadcast channel and immediately see your carefully arranged audio and video content. https://briian.com/47680/ \n \n 今日筆記: W6 CD2020 說明 Pyslvs-UI 的下載與基本操作流程{1}... \n \n pyslvs/2 \n pyslvs and solvespace/3 \n \n Assignment1 \n Simulation 模擬 A simulation in CoppeliaSim can be started, paused and stopped with [Menu bar --> Simulation --> Start/Pause/Stop simulation] or through the related toolbar buttons: 可以使用[菜單欄->模擬->開始/暫停/停止模擬]或通過相關的工具欄按鈕來啟動，暫停和停止 CoppeliaSim 中的模擬： [Simulation start/pause/stop toolbar buttons] Internally, the simulator will use additional intermediate states in order to correctly inform scripts or programs about what will happen next. Following state diagram illustrates the simulator\'s internal states: [模擬開始/暫停/停止工具欄按鈕] 在內部，模擬器將使用其他中間狀態，以正確告知腳本或程序接下來將發生的情況。以下狀態圖說明了模擬器的內部狀態： Scripts and programs should alwaysreact according to the current system call function and possibly the simulation state in order to behave correctly. It is good practice to divide each control code into at least 4 system call functions (e.g. for non-threaded child scripts): 腳本和程序應始終根據當前系統調用功能以及可能的模擬狀態進行反應，以便正確運行。優良作法是將每個控制代碼至少分為 4 個系統調用函數（例如，用於非線程子腳本）： Initialization function: sysCall_init: the function is called only when the script is initialized. • Actuation function: sysCall_actuation: the function is called when actuation should happen. • Sensing function: sysCall_sensing: this function is called when sensing should happen. • Clean-up function: sysCall_cleanup: the function is called just before the script is de-initialized (e.g. at simulation end, or when the script is destroyed). •初始化函數：sysCall_init：僅在腳本初始化時才調用該函數。 •激活函數：sysCall_actuation：應在發生激活時調用該函數。 •感應功能：sysCall_sensing：應在感應發生時調用此功能。 •清理函數：sysCall_cleanup：該函數在腳本未初始化之前被調用（例如，在仿真結束時或銷毀腳本時）。 For examples on how to arrange a typical script, refer to the main script, the child scripts and customization scripts pages. 有關如何安排典型腳本的示例，請參閱主腳本，子腳本和自定義腳本頁面。SIMULATION LOOPThe simulator operates by advancing the simulation time at constant time steps. Following figure illustrates the main simulation loop: 模擬器通過以恆定的時間步長推進模擬時間來進行操作。下圖說明了主要的仿真循環：Real-time simulation is supported by trying to keep the simulation time synchronized with the real time: 通過嘗試使仿真時間與實時保持同步來支持實時仿真：Following represents a very simplified main client application (messaging, plugin handling and other details have been omitted for clarity purpose): 以下是一個非常簡化的主客戶端應用程序（為清晰起見，已省略了消息，插件處理和其他詳細信息）：Depending on the simulation complexity, performance of the computer and simulation settings, real-time simulation might not always be possible. 取決於模擬的複雜性，計算機的性能和模擬設置，實時模擬可能並不總是可能的。 Simulation speed In non real-time simulations, the simulation speed (i.e. the perceived speed) is mainly dependent on two factors: the simulation time step and the number of simulation passes for one rendering pass (see the simulation dialog for more details). In the case of a real-time simulation, the simulation speed mainly depends on the real-time multiplication coefficient, but also to a certain degree of the simulation time step (a too small simulation time step might not be compatible with the real-time character of a simulation because of the limited calculation power of the computer). During simulation, the simulation speed can be adjusted with following toolbar buttons: 在非實時仿真中，仿真速度（即感知速度）主要取決於兩個因素：仿真時間步長和一個渲染通道的仿真通道數量（有關更多詳細信息，請參見仿真對話框）。在實時仿真的情況下，仿真速度 主要取決於實時乘法係數，而且在一定程度上取決於仿真時間步長（太小的仿真時間步長可能與實時時間不兼容）。由於計算機的計算能力有限，因此無法進行仿真。在模擬過程中，可以使 用以下工具欄按鈕來調整模擬速度： [Simulation speed adjustment toolbar buttons]The simulation speed is adjusted in a way so that the initial simulation time step is never increased (because this might have as consequence the breaking of a mechanism for example). Following two figures illustrate the simulation speed adjustment mechanisms: [模擬速度調整工具欄按鈕] 以某種方式調整模擬速度，以使初始模擬時間步長永遠不會增加（如，這可能因此而導致機制中斷）。以下兩個圖說明了仿真速 度調整機制：The rendering operation will always increase thesimulation cycle duration, thus also slowing down simulation speed. The number of main script executions per scene rendering can be defined (see further up), but this is not enough in some situations, because rendering will still slow down every xth simulation cycle (which can be handicapping with real-time requirements). For those situations, a threaded rendering mode can be activated via the user settings, or via the following toolbar button: 渲染操作將始終增加仿真週期的持續時間，從而也降低了仿真速度。可以定義每個場景渲染的主腳本執行次數（請參閱後面的內容），但這在某些情況下還不夠，因為渲染仍然會減慢每個第 x 個模擬週期的時間（這可能會限制實時性）。在這種情況下，可以通過用戶設置或以下工具欄按鈕激活線程渲染模式： [Threaded rendering toolbar button]When the threaded rendering mode is activated, a simulation cycle will only consist in execution of the main script, thus simulations will run at maximum speed. Rendering will happen via a different thread, and not slow down the simulation task. The drawbacks have however to be considered. When threaded rendering is activated, then: • Rendering will happen asynchronously to the simulation loop, and visual glitches might appear • Thevideo recorderwill not operate at constant speed (some frames might get skipped) • The stability of the application might be reduced• Some operations (e.g. erasing an object, etc.) require to wait for the rendering thread to finish work, before being able to execute, and vice-versa. In those situations, cycles could take more time than in the sequential rendering mode[線程渲染工具欄按鈕] 激活線程渲染模式後，模擬週期將僅包含在執行主腳本中，因此模擬將以最大速度運行。渲染將通 過不同的線程進行，並且不會減慢模擬任務的速度。然而，必須考慮缺點。激活線程渲染後，： •渲染將與模擬循環異步發生，並且可能會出現視覺故障 •錄像機無法以恆定速度運行（會跳 過某些幀） •應用程序的穩定性可能會降低 •某些操作（例如擦除對像等）需要等待渲染線程完成工作才能執行，反之亦然。在那些情況下，循環可能比順序渲染模式花費更多的時 Recommended topics • Related API functions• Simulation settings dialog• Scripts• The main client application• Plugins•相關的 API 函數 •模擬設置對話框 •腳本 •主要客戶應用 •插件參考於:  https://coppeliarobotics.com/helpFiles/index.htm \n assignment2 \n Chapter 1 Successful Design This chapter gives you an introduction to designing enclosures for electronic products and defines a “successful design.” We’ll discuss the designer’s role in the setting of product requirements, where the designer fits into the overall product development picture, the importance of communication, and the initial factors to consider when beginning a design. Before we get started, let’s briefly define what we mean when we talk about an “electronic product.” It is a product that has a circuit board in it and usually has some input/output device such as an LCD. Examples of electronic products include cell phones, digital cameras, and the ultrasonic toothbrush. An electronic product enclosure is the item that surrounds and supports the circuit board. The enclosure is what makes the device usable to the consumer. The enclosure is necessary for a number of reasons – to protect the electronics (the circuit board and LCD) from the environment or from a physical jolt (such as dropping the product). The enclosure provides access to input information to the device, via keys or buttons perhaps, and allows information to be transferred from the device. The enclosure provides structure so that the circuit board logic is supported and protected. Examples of some very effective product enclosures that have been developed in recent years are the Apple iPhone 7 or the HP Spectre laptop computer (both, circa 2016). In essence, a successful design of an enclosure will be the one in which the design has conformed to the product’s written specification (spec) and has been done within the cost and time parameters that were set. Let’s now begin our exploration of the process of designing these enclosures. 本章為您介紹了電子產品外殼的設計，並定義了“成功的 設計”。 我們將討論設計師在設置產品要求方面的角 色，其中 設計師適應了整個產品開發圖， 溝通，以及 開始設計時要考慮的初始因素。 在開始之前，我們先簡 單地定義當我們談論一個 “電子產品。”它是其中裝有電 路板的產品，通常具有 一些輸入/輸出設備，例如 LCD。 電子產品的例子包括 手機，數碼相機和超聲波牙刷。 電 子產品外殼是包圍並支撐電路的物品 板。外殼使設備對 消費者可用。外殼 出於多種原因，這是必要的–保護電 子設備（電路板和 LCD）從環境或物理顛簸（例如掉落 產品）。 機箱可通過按鍵或按鈕訪問設備的輸入信息 也 許，並允許從設備傳輸信息。外殼 提供結構，以便支持 和保護電路板邏輯。 已開發出一些非常有效的產品外殼 的示例 近年來出現的是 Apple iPhone 7 或 HP Spectre 筆記本電腦（兩者 2016）。 從本質上講，一種成功的 外殼設計將是 設計已符合產品的書面規格書（spec） 並已 在設置的成本和時間參數內完成。現在讓我們開始 探索這些外殼的設計過程。 Design Guide 設計指南 This text is intended to place in a single reference, a design guide for the successful mechanical design of an electronic product enclosure. 本文旨在作為成功的設計指南，以單一參考文獻的形式 提供。 電子產品外殼的機械設計。 © Springer International Publishing AG, part of Springer Nature 2019 1 T. Serksnis, Designing Electronic Product Enclosures, https://doi.org/10.1007/978-3-319-69395-8_1 Let’s break down some of the words of the above sentence for further definition (with the word “successful” defined in its own subtopic). Design Guide This text is a starting point, a point of reference. The designer will be using many guides in their work; this text is intended to be a general help and serves to augment the designer’s entire past experience and their present organization’s established processes. Electronic Product Enclosure (EPE = Electronic Product Enclosure) The electronic product enclosure consists of both the external and internal structural elements of a product. It includes any of the hardware used for user interfacing, any of the connectors used to interface cables, and any elements that the user will physically feel and see. Many electronic enclosures contain one or more PCBA (Printed Circuit Board Assemblies), and these must be protected against the rigors of normal usage. An enclosure could be very simple or be extremely complicated with thousands of separate parts. One of the designer’s first tasks will be to define the “system” that they are designing, and that is covered in a later chapter. The term “enclosure” (in this text) will be on the less complicated end of the spectrum, and the methodology explained can be extended into the more complicated design situations. The EPE Designer This is the person responsible for the design of the enclosure for an electronic product. In many cases, it is a mechanical engineer, but it can be someone with a background in mechanical engineering or who has the experience of the discipline. A good EPE Designer will have the following characteristics: • Ability to understand and conform to the product specification • Be able to add to and help create the product specification • Create inventive solutions to the problems presented by the product Thus, the EPE Designer must be able to both be creative and still follow the major objectives of the project. 讓我們分解上面句子中的一些詞以進一步定義 （在其子主題中定義了“成功”一詞）。 設計指南 本文是一個起點，一個參考點。設計師將使用許多 指導他們的工作；此文本旨在提供一般幫助，並有助於 擴大 設計師過去的全部經驗以及他們現在的組織的建立 流程。 電子產品外殼（EPE =電子產品外殼） 電子產品外殼由內部和外部結構組成 產品的要素。它包括用於用戶接口的任何硬件， 用於連接電纜的連接器，以及用戶會感覺和看到的任何 元素。許多電子機箱包含一個或多個 PCBA（印刷 電路板組件），並且必須防止這些組件受到正常情況的 影響 用法。 外殼可能非常簡單，也可能非常複雜，有數千個外殼 分開的部分。設計人員的首要任務之一是定義“系統” 他們正在設計，這將在下一章中介紹。術語“外殼”（在 該文本）將處於較為簡單的範圍內，其方法論 解釋可以擴展到更複雜的設計情況。 EPE 設計師 這是負責設計電子產品外殼的人員。在許多情況下，它 是機械工程師，但也可以是具有機械工程背景或具有該 領域經驗的人員。一個 優秀的 EPE 設計器將具有以下特徵： •理解並符合產品規格的能力 •能夠添加並幫助創建產品規格 •為產品提出的問題創建創造性的解決方案 因此，EPE 設計人員必須既有創造力，又要遵循 項目的主要目標。 1.2 Defining the Overall Team The intent of this section is to show that engineering (and mechanical engineering in particular) doesn’t design products by themselves; they are certainly a part of a team. Characteristics of the overall team are that the team can be: • Of a small or large size • Located in one location or distributed worldwide • Limited in resources or have access to almost unlimited resources • In possession of the latest tools, or not • Motivated by a variety of reasons for accomplishing their goal 1 Successful Design 3 • Varying in experience The entire engineering effort consists of an amalgam of design among several disciplines. These disciplines include: • Electrical engineering • Software and firmware engineering • Mechanical engineering (including structural and thermal) • Industrial engineering • System engineering Therefore, it is recognized that mechanical engineering is only a part of the overall engineering design of an electronic product, and many of the decisions made are in cooperation with the other disciplines. Contemporary product design should balance various trade-offs among all of the factors that go into the production released product. Indeed, the entire engineering effort (all of the disciplines from Sect. 1.2) is only a part of the overall effort that goes into the release (sale) of a product. Besides the engineering effort, contributions result from the following groups: Each group is defined, followed by how specifically the mechanical design “interacts” with that group. All of this is meant to emphasize that the mechanical design is not done “in a vacuum” but rather as part of a multitasked product delivery team. Marketing (Including Input from Sales) This organization is responsible for the product definition, that is, defining what the customer wants and what the product will be from the customer viewpoint. This “product definition” usually takes the form of a document that engineering will accept as the product requirements. Marketing also has the responsibility of overseeing how a particular product will fit into the overall product line of the company (or division of the 1.2 定義總體團隊本節的目的是表明工程（尤其是機械 工程）不是自己設計產品；他們當然是團隊的一部分。 整個團隊的特徵是團隊可以：•規模較小•位於一個位置 或分佈在世界各地•資源有限或可以使用幾乎無限的資 源•是否擁有最新工具•有動力出於多種原因實現目標 1 成功的設計 3•經驗豐富整個工程工作包括多個學科之 間的設計融合。這些學科包括：•電氣工程•軟件和固件 工程•機械工程（包括結構和熱工程）•工業工程•系統工 程因此，人們認識到機械工程只是電子產品整體工程設 計的一部分，並且許多決定是與其他學科合作進行的。 當代產品設計應在投入生產的產品的所有因素之間權衡 取捨。確實，整個工程工作（來自第 1.2 節的所有學科） 只是產品發布（銷售）的全部工作的一部分。除了工程 上的努力外，還有以下幾組的貢獻：定義了每個組，然 後具體說明了機械設計與該組“交互”的方式。所有這 些都是為了強調機械設計不是“在真空中”完成的，而 是作為多任務產品交付團隊的一部分。市場營銷（包括 來自銷售的投入）該組織負責產品定義，即從客戶的角 度定義客戶想要什麼以及產品將是什麼。該“產品定 義”通常採用工程形式將作為產品要求接受的文檔的形 式。營銷還負責監督特定產品如何適合公司的整體產品 線（或 company). The EPE Designer interacts with Marketing in the effort to define how the product will function, how that functionality will present itself to the customer (user interface), and how the product will look to the customer (industrial design). Operations (Manufacturing) This organization is responsible for the complete flow of materials for individual components and how those individual components get fabricated, assembled, and delivered to the customer. If engineering’s responsibility is to produce the product documentation, operations should be able to take that 公司）。 EPE 設計人員與市場營銷人員進行交互，以定 義產品的功能，向客戶展示該功能的方式（用戶界面） 以及產品對客戶的外觀（工業設計）。運營（製造）該 組織負責單個組件的完整材料流程，以及如何製造，組 裝和交付這些單個組件給客戶。如果工程部門負責製作 產品文檔，則操作人員應該能夠 documentation and get that product produced that meets the product specifications. The EPE Designer intersects with operations by making decisions on part fabrication techniques, vendor (supplier) selection, and any trade-offs between quality/ cost/appearance. Testing (Design Verification) This organization is responsible for testing both the prototyping and mature designs. This can be accomplished by resources within the mechanical design group (itself) or by an independent group setup for this particular function. 1.2 Defining the Overall Team 4 The EPE Designer intersects with the test function by either conducting or reviewing test results. The testing done on the product is actually a part of the product requirements document (PRD) and that it must be proven that the product passes testing as defined in that document. For example, if the PRD states that a product must survive a one meter drop, then a test must be defined that states considerations such as: • How many drops of a single item (under test) • Impact faces or corners of that item • Environment that testing is to take place (such as ambient temperature) • Statistical concerns (such as how many single items must pass testing) • Order of testing (among various tests that unit will undergo) • Definition of “survive” (degree of functionality or appearance after test) Quality Control/Quality Assurance This 文檔並獲得符合產品規格的產品。 EPE 設計人員通過對 零件製造技術，供應商（供應商）選擇以及質量/成本/ 外觀之間的任何取捨做出決策來與運營相交。測試（設 計驗證）該組織負責測試原型設計和成熟設計。這可以 通過機械設計組（本身）中的資源或為此特定功能的獨 立組設置來完成。 1.2 定義總體團隊 4 EPE 設計器通過 執行或查看測試結果來與測試功能相交。在產品上進行 的測試實際上是產品需求文檔（PRD）的一部分，必須 證明該產品通過了該文檔中定義的測試。例如，如果 PRD 聲明產品必須承受一米高的跌落，則必須定義一項測 試，其中應考慮以下因素：•單個物品跌落了多少（被測）• 該物品的撞擊面或拐角•要進行測試的環境（例如環境溫 度）•統計問題（例如必須通過多少個單個項目）•測試 的順序（設備將要進行的各種測試）•“生存”的定義（功 能程度）或外觀經過測試）質量控制/質量保證 organization determines whether the acceptability limits of the individual parts (or entire assemblies) meet the standards both specified in the individual product specification (the drawing) and in the established overall corporate standards. Quality control would be concerned with tactical situations, while (corporate) quality assurance would be more concerned with strategic situations. Most companies have various ways of both controlling and monitoring the quality of the product and certainly get involved with customer satisfaction and service issues. The EPE Designer intersects with this organization by specifying on their documentation the acceptability limits of each part and can go all up to include assemblies. Typically, acceptability limits take the form of: • Size (geometry) control as specified in drawing tolerances • Material and plating specifications stated on drawing • Cosmetic flaw rejection criteria stated on drawing • Functional specification as stated on drawing • Determining the “critical” nature of some aspect of the part documentation. Service This organization is responsible for the repairing, warranty, and return of product functions. They help determine course of action for field problems with the equipment. The EPE Designer intersects with this organization by designing-in a reasonable process for the disassembly and repair of the product. Of course, a design with a designed-in high reliability will have less reason to repair. It’s also possible to provide for methodology to determine misuse of the product. Project Management This organization is responsible for tracking the project for: • Time allocation – meeting deadlines that are committed • Resource allocation 組織確定單個零件（或整個組件）的可接受性極限是 否滿足單個產品規格（圖紙）和已建立的總體公司標 準中指定的標準。質量控制將與戰術情況有關，而（公 司）質量保證將與戰略情況有關。大多數公司都有控 制和監視產品質量的各種方法，並且肯定會涉及客戶 滿意度和服務問題。 EPE 設計人員通過在其文檔中 指定每個零件的可接受性限制來與該組織相交，並且 可以一併包括裝配。通常，可接受性限制的形式為：• 圖紙公差中規定的尺寸（幾何形狀）控制•圖紙上規定 的材料和鍍層規格•圖紙上規定的外觀缺陷排除標準• 圖紙上規定的功能規格•確定“關鍵”性質部分文檔的 某些方面。服務該組織負責產品功能的維修，保修和 退貨。它們有助於確定設備現場問題的解決方案。 EPE 設計人員通過設計合理的過程來拆卸和維修產 品，從而與此組織相交。當然，設計可靠的設計將減 少維修的理由。還可以提供確定產品濫用的方法。項 目管理該組織負責跟踪項目，以進行以下工作：•時間 分配–遵守承諾的期限•資源分配 • Priority management (for a single project and relative to projects competing for the same resources) • Compliance to specifications for the product • Meeting cost goals • Reporting status of project The EPE Designer intersects with this organization by reporting estimates of time and resources for all separate line items of the mechanical part responsibility. This starts with product conceptualization, design, prototyping, and testing and continues on into final release documentation. Estimates of time and resources are updated as milestones are met. Upper Management Included in this group is anyone who is responsible for the project and has a need to understand the project. Project updates would be provided to this group at specific times during the project. Upper management would provide leadership and vision to the project. The EPE Designer intersects with upper management in an indirect manner. Reporting of project status is relevant at any time and is usually provided thru the project manager. •優先級管理（針對單個項目以及與之競爭的項目 相同的資源） •符合產品規格 •實現成本目標 •項目報告情況 EPE 設計器通過報告對 EPE 的估計與該組織相交 機械零件責任的所有單獨行項目的時間和資源。 這從產品概念化，設計，原型設計和測試開始，一直到 最終版本文檔。時間和資源的估計是 在達到里程碑時更新。 包括在此組中的是負責 項目，並且需要了解該項目。將提供項目更新 在項目期間的特定時間加入該小組。高層管理人員將提 供 對項目的領導力和遠見。 EPE 設計器以間接方式與高層管理人員相交。 項目狀態的報告在任何時候都是相關的，通常是通過 專案經理。 1.3 Product Requirements Determining success is a matter of meeting (or exceeding) the requirements of the project. This is a simple statement but is actually very complicated in its interrelated aspects. A project could be determined successful if it met its goals. These goals can be addressed in (one or more of) the following written documents. Product Requirements Document (PRD) This document can go by a variety of names (it will vary by company). Basically, it is a “contract” of sorts that attempts to specify the basic functionality of the product. It can be as simple as a few paragraphs or extremely complicated. It can contain: (a) A description of what the product will accomplish for the customer – it usually does not specify exactly how the product will work. That is, details on “how to get there, from here” are not explicit. This description uses words on the “final outside appearance” of the product rather than the details of the “inner workings.” Follow-on documents (or specifications) can also specify details of the product. Again, the PRD forms an agreement between marketing and engineering as to what the product will be. The PRD can vary in its content detail. It is (should be) updated, during the course of the project, as elements get revised or added to. At each overall product review, it should be compared on the extent of how the design is conforming to the PRD. 1.3 產品要求 確定成功是滿足（或超越）要求的問題。 項目。這是一個簡單的聲明，但實際上在相互關聯方 面非常複雜 方面。 如果項目達到了目標，則可以確 定為成功。這些目標可以是 在以下（一個或多個） 書面文件中解決。 產品需求文檔（PRD）該文檔可 以有多種形式 名稱（因公司而異）。基本上，這是嘗 試的“合同” 指定產品的基本功能。它可以簡單到幾 段，也可以非常複雜。它可以包含： （a）產品對客 戶的成就的描述-通常 沒有確切說明產品的工作方 式。也就是說，有關“如何 從這裡到達那裡”並不明 確。此說明在“最終 產品的外觀”而不是“內部工作原 理”的細節。後續文件（或規格）也可以指定 產品。 同樣，珠三角在市場和工程之間就產品的形式達成協 議。 PRD 的內容詳細信息可能有所不同。它是 （應） 在項目過程中隨著要素的修改而更新或 添加到。在 每次整體產品審核時，應在以下方面進行比較： 設 計如何符合 PRD。 A description of how the product will interface with the customer. This would include: • How information is displayed to the customer or how the information will get from the customer, to the product. This can be visual, auditory, or tactile. • Various interfaces to the product, such as connectors, switches, or buttons. • Labeling or icons intended to provide information to the customer. (c) A description of the various components of the product. That is, if the product (the product being designed) needs additional equipment or cables to function in a larger system, then a description of the various parts of the “system” will need to be described. Thus, one will need to “draw a boundary” around exactly what this product (being designed) is. What exactly is the “deliverable” to the customer? (d) Indication of the final aesthetic (visual appearance) of the product. Colors, textures, and industrial design are usually very well-specified. (e) A listing of the environments that the product will both operate and be stored in. This includes temperature, shock, drop, vibration, humidity, water egress protection, shipping conditions, altitude, and specific corrosive atmospheres. (f) A listing of any standards that the product will need to pass. This includes both safety and regulatory standards such as Underwriters Laboratory (UL) for safety, federal communication compliance (FCC) for electromotive magnetic interference (EMI), and the (literally) hundreds of other compliance standards that are a real part of today’s design world. Some of these standards are country specific, while others are accepted on a worldwide basis. Obviously, anything to do with medical, food, or children’s toys will have their own rigorous testing standards to pass. Internal Test Reports These indicate positive test results. These are the results of testing done to show that the requirements as set forth in the PRD have been passed. If the tests haven’t been passed, then there are action plans initiated to improve the product and conduct further testing. Reports from Initial Customers This is “alpha” or “beta” testing where customer feedback is positive or negative. It is hoped that customers are gaining measureable value from the product. Reasonable improvements to the product can be made when this “real-world” feedback is available. “Alpha” testing is usually done with inhouse personnel who are simulating the actual customer, while “beta” testing is usually done with existing customers before shipment to actual (paying) customers. Project Management Reports (a) On expenses (expected vs. actual). This includes expenses for salaries, capital equipment, tooling, etc. Monitoring of expenses can lead to analysis of the true 產品如何與客戶互動的說明。這個會 包括： •如何向客戶顯示信息或信息將如何顯示 從客戶那裡獲取產品。這可以是視覺，聽覺或 觸。 •產品的各種接口，例如連接器，開關或按鈕。 •用於向客戶提供信息的標籤或圖標。 （c）產品各個組成部分的說明。也就是說，如果產品 （正在設計的產品）需要其他設備或電纜才能起作用 在較大的系統中，則將對“系統”的各個部分進行描述 需要描述。因此，人們將需要準確地“劃定邊界” 該產品（正在設計）是什麼。到底什麼是“可交付成 果”？ 顧客？ （d）表明產品的最終美學（外觀）。顏色，紋理和工 業設計通常是非常明確的。 （e）產品將在其中運行和存儲的環境的清單。 這包括溫度，衝擊，跌落，振動，濕度，進水保護，運 輸條件，高度和特定的腐蝕性氣氛。 （f）產品需要通過的任何標準的清單。這既包括 安全和監管標準，例如美國保險商實驗室（UL） 安全，符合聯邦電磁通訊規範（FCC） 干擾（EMI）以及數百種其他合規標準 這是當今設計界的重要組成部分。其中一些標準是國家/ 地區 具體而言，而其他人則在全球範圍內被接受。顯然， 使用醫療，食品或兒童玩具進行嚴格的測試 通過標準。 內部測試報告這些表示積極的測試結果。這些是結果 完成測試以顯示珠三角上的要求已通過。 如果尚未通過測試，則將啟動行動計劃以改善 產品並進行進一步測試。 初始客戶的報告這是“ alpha”或“ beta”測試，其中 客戶 反饋是正面還是負面。希望客戶變得可衡量 產品的價值。何時可以對產品進行合理的改進 此“實際”反饋是可用的。 “ Alpha”測試通常由模擬 實際客戶的內部人員完成，而“ beta”測試則是 通常在發貨到實際（付款）之前與現有客戶進行 顧客。 項目管理報告 （a）支出（預期與實際）。這包括工資，資本支出 設備，工具等。費用監控可以導致對真實情況的分析 “payback periods” of the project and better predictions on expenses for future projects. (b) Status on milestone dates (expected vs. actual): as with expenses, monitoring of how well the project achieved its time commitments leads to an indication of the true “payback period” of the project. Analyzing where milestones were not met can lead to better predictions for future projects. Ongoing analysis of “success” (as the product matures in the field) can be measured by: Quality Assurance Reports These contain information about customer satisfaction and warranty returns: any issues or problems with the product must be quickly addressed so as to protect the company’s reputation in the industry. If revisions need to be made, they must be implemented with great urgency. Thus, if customer satisfaction reaches some set level of reliability, the product design team will have achieved success. Analysis of “Lessons Learned” From all disciplines on the project: every project will contain items where things could have been done better. Continuous improvement should be strived for. There should be a way to gather feedback from everyone in the product design process on what items would need to be improved. This will enhance the success rate of future projects. More on this subject is presented in Chap. 13. Sales Expected vs. actual. Sales figures can indicate the success of the project – in the sense that marketing has predicted the need for the product, engineering/operations has delivered that product to the customer, and the customer does (indeed) value that product. Or, in the opposite case, sales can be less than expected (predicted). This could have happened for a variety of reasons (such as): • Product is not (exactly) what the customer needed (price too high/performance features too low). • Product is too late out into the market, that is, it took too long to get the product out into the market, and the customers now have better choices. • Product is too early into the market (not enough “early adopters”). This happens when the technology of the product doesn’t match what customers (at the time) value or other supporting technology isn’t available as yet that would make this particular product fully useful. • Low reliability. All of the above reasons should be placed in the “competitive arena.” That is, most products have competition in their markets. Customers will choose purchases based on their needs for performance, price, and quality. New technology solutions must compete against the older solutions. It would be rare to have all of the data available at product release to determine how “successful” the product design effort is. Product design usually has increased risk of success if: Milestone completion dates are unreasonably shortened. • The design has a high content of brand new components. • Changes (additions) to the project occur at an unmanageable rate. Successful design has been simply described as: 1. Function to specification 2. Delivery on time to project schedule 3. Delivery at predicted costs Of course, projects can exceed functionality, be delivered ahead of time, and perhaps be even at a lower cost. This would be cause for celebration (although some examination needs to go into why “actuals” didn’t match “predictables”). Behind the above “simple statements” for successful design is however some very large implications and that they are not so “simple.” Let me break down the above three variables a bit. All three are interrelated on several levels. 項目的“投資回收期”以及對未來費用的更好預測 項目。 （b）里程碑日期的狀態（預期與實際）：與支出一樣， 監測 項目完成其時間承諾的程度如何表明 項目的真正 “投資回收期”。分析沒有里程碑的地方 滿足可以為將來 的項目帶來更好的預測。 對“成功”的持續分析（隨著產 品在現場的成熟）可以通過以下方法進行衡量： 質量保 證報告這些包含有關客戶滿意度的信息 和保修退貨：產 品的任何問題必須迅速 解決這個問題，以保護公司在業 界的聲譽。如果需要修訂 要做到這一點，必須立即執 行。因此，如果客戶滿意度達到一定的可靠性水平，則 產品設計團隊將擁有 取得成功。 分析項目中所有學科 的“經驗教訓”：每個項目都將 包含本可以做得更好的項 目。連續的提高 應該努力。應該有一種方法可以收集 產 品設計過程中哪些項目需要改進。這將增強 未來項目的 成功率。有關此主題的更多信息，請參見第 5 章。 13 預 期銷售額與實際銷售額。銷售數字可以表明該項目的成 功– 營銷已預見到產品需求的感覺，工程/運營已將產品 交付給客戶，而客戶確實（確實） 重視該產品。或者， 在相反的情況下，銷售額可能會低於預期（預測）。發 生這種情況可能有多種原因（例如）： •產品並非（確 切地）滿足客戶需求（價格太高/性能太高） 功能太 低）。 •產品進入市場的時間太晚，也就是說，花費太 長時間才能獲得產品 進入市場，客戶現在有了更好的選 擇。 •產品進入市場為時過早（“早期採用者”不足）。 有時候是這樣的 產品的技術與當時的客戶不匹配時 價 值或其他支持技術尚不可用，因此 特定產品完全有 用。 •低可靠性。 以上所有原因都應放在“競爭舞台” 上。那是， 大多數產品在其市場中都有競爭。客戶將選 擇購買 根據他們對性能，價格和質量的需求。新技術解 決方案 必須與較舊的解決方案競爭。 很難在產品發佈 時獲得所有數據來確定 產品設計工作多麼“成功”。產品 設計通常有所增加 成功的風險，如果：里程碑完成日期 被不合理地縮短了。 •設計中包含大量的全新組件。 •對項目的更改（添加）以難以控制的速度發生。 成功的設計簡單描述為： 1.功能規格 2.準時按計劃進度交付 3.以預計的成本交貨 當然，項目可以超越功能，可以提前交付，並且 甚至可以降低成本。這將值得慶祝（儘管有些 需要檢查為什麼“實際”與“可預測的”不匹配）。 然而，在上述“成功設計的簡單陳述”的背後有一些 影響很大，而且不是那麼“簡單”。讓我分解一下 以上三個變量有點。這三個方面在幾個層面上相互關聯.. \n \n \n', 'tags': '', 'url': 'Week6-9.html'}, {'title': 'Week10-14', 'text': '期中報告 \n w10開會紀錄: \n topic2: \n coppeliasim :40723221 \n MSModelingAndTFApproaches.pdf . 207頁:7人 40723249 40623117 40723221 40723228 40723236 40723237 40723243 \n MechatronicDesignCases.pdf . 46頁:2人 40723222 40723244 \n topic3: \n MechaFutureAndChallenges.pdf . 38頁:2人 40623252 40523253 \n MechaEducFutureNeed.pdf . 20頁:1人 40723240 \n 參考資料: CMS :http://mde.tw/cd2020pj1/content/CMS.html google用戶設置影片 :https://drive.google.com/file/d/1G4MzXUIbNRK7z2XdjtxXzhX51zHHwq85/view?usp=sharing \n 開會紀錄影片: \n \n google用戶端登入程序說明及疑難排解{影片經過加速處理} \n 1. Log in to your google account {school\'s} 2. \n Go to https://console.developers.google.com \n 3. \n Create a Google API project and accept the required project \n 4. Implement and enable Google\'s API 5. \n Select the consent button in Google Domain API \n 6. \n Choose internal or {external} users to add new application porgram \n 7 \n Enter the credentials under API and service \n 8. Create credentials of type "OAuth 2.0 Client ID" for web applications 9. (Set URL) The authorized JavaScript is: https: // localhost: 8443 10. Define the URI as: https: // localhost: 8443 / login / google / \n 11. Save oauth_gm.txt \n 12. Open leo to change the name of the txt file named scrum in the config, and press save and darwROC after the modification is completed \n 13.open https://localhost:8443 14.test   the end GOOGLE 用戶端影片參考 \n     \n For ubuntu settings explain. \n 1. Download ubuntu 2. Add a NAT network to your favorite network 3. Import the ubuntu you just downloaded 4. The add-on setting in the network in settings is set to host-only 5. Start ubuntu 6. Password kmol2020 7. Click activites on the upper right and click show application 8. Click LX terminal 9. Enter xterm & 10. Enter ls to display data 11. Press ctrl + right button to select the size of the window 12. Enter cd coppeliasim4_rev4 in the folder 13. Enter ls to view the information in the folder 14. Enter cd CoppeliaSim_Edu_V4_0_0_ubuntu18_04 15. Enter again./coppeliaSim.shf \n 16.You can refer to the following ubuntu video . \n 17.you can dowonload from this website: http://mde.tw/cd2020pj1/content/Ubuntu.html \n 自製影片教學:{有字幕可打開} \n \n \n \n [Ubuntu][Linux][教學] 安裝設定#02. [跨平台] 於VirtualBox上安裝Ubuntu18.04與安裝中 \n Ubuntu 20.04 For Windows Users \n \n How to make Ubuntu picturesque-Ubuntu beautification tutorial-fully open source \n week11 \n For week11 meeting\xa0 \n \n \n Download ubuntu Add a NAT network to your favorite network Import just downloaded ubuntu Attach to the network in the settings is set to host-only Start ubuntu Password kmol2020 Click on activites in the upper right and click show application Click LX terminal Type xterm & Enter ls to display data Press ctrl + right click to select the window size Enter cd coppeliasim4_rev4 in the folder Enter ls to view the information in the folder Enter cd CoppeliaSim_Edu_V4_0_0_ubuntu18_04 Then enter./coppeliaSim.sh Open coppeliasim and import sdc.ttt, then open the CoppeliaSim_4_Self_Driving_Car_Simulation.7z just downloaded Open the car_model.py in the editor When finished, press tool> go Coppeliasim in ubnutu should also start the simulation After success, the four-wheeled vehicle in the sdc.ttt file should run in a circle. \n For ubnutu setting and connecting video \n \n 補充:解決有關帳號git push後學號錯誤問題 \n \n \n', 'tags': '', 'url': 'Week10-14.html'}, {'title': 'Week15~18', 'text': 'Develop \n https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Week15~18.html'}]};