/* ============================================
   AI Academy - Level 1: AIの基礎知識
   ============================================ */

const LEVEL1_DATA = {
    id: 1,
    title: "AIの基礎知識",
    icon: "🤖",
    description: "AIの定義・歴史・分類と機械学習の基本を学ぶ",
    modules: [
        {
            id: 101,
            title: "AIの定義と分類",
            duration: "15分",
            content: `
<h2>AI（人工知能）とは</h2>
<p><strong>AI（Artificial Intelligence）</strong>とは、人間の知的活動をコンピュータで再現する技術の総称です。現在のAIは階層的な構造を持っており、それぞれの技術が互いに関係しています。</p>

<h2>AIの階層構造</h2>
<table>
<thead>
<tr><th>層</th><th>名称</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>最上層</td><td><strong>AI（人工知能）</strong></td><td>人間の知的活動をコンピュータで再現する技術全体</td></tr>
<tr><td>中間層</td><td><strong>機械学習（ML）</strong></td><td>データからパターンを自動で学習する技術</td></tr>
<tr><td>下層</td><td><strong>深層学習（DL）</strong></td><td>ニューラルネットワークで高度な特徴を自動抽出</td></tr>
<tr><td>応用層</td><td><strong>生成AI（GenAI）</strong></td><td>LLM・画像生成など、新たなコンテンツを生成</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
生成AIは深層学習の一応用であり、深層学習は機械学習の一手法であり、機械学習はAIの一分野です。この入れ子構造を理解することが、AI全体像の把握に繋がります。
</div>

<h2>特化型AI vs 汎用AI</h2>
<table>
<thead>
<tr><th>項目</th><th>特化型AI（ANI）</th><th>汎用AI（AGI）</th></tr>
</thead>
<tbody>
<tr><td>能力範囲</td><td>特定タスクのみ</td><td>あらゆる知的タスク</td></tr>
<tr><td>現状</td><td>実用化済み</td><td>未実現（研究段階）</td></tr>
<tr><td>例</td><td>画像認識、翻訳、自動運転、将棋AI</td><td>人間と同等の汎用的な知能</td></tr>
<tr><td>LLMの位置づけ</td><td>言語タスクに特化（ただし非常に広い）</td><td>AGIへの一歩？（議論中）</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 重要</div>
現在のAI（LLMを含む）はすべて「特化型AI」です。ただし、LLMの能力の広さは前例がなく、「特化型」と「汎用型」の境界が曖昧になりつつあります。
</div>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "AI（人工知能）の階層構造として正しい包含関係はどれですか？", options: ["深層学習 ⊃ 機械学習 ⊃ AI", "AI ⊃ 機械学習 ⊃ 深層学習", "機械学習 ⊃ AI ⊃ 深層学習", "生成AI ⊃ 深層学習 ⊃ 機械学習"], answer: 1, explanation: "AIが最上位概念で、その中に機械学習があり、さらにその中に深層学習があります。" },
                { id: "q101_2", type: "choice", question: "現在のLLM（大規模言語モデル）の分類として正しいものはどれですか？", options: ["汎用AI（AGI）", "特化型AI（ANI）", "超知能AI（ASI）", "強いAI"], answer: 1, explanation: "LLMは言語タスクに特化した特化型AIです。能力の幅は広いですが、AGIには到達していません。" },
                { id: "q101_3", type: "choice", question: "深層学習（ディープラーニング）はどの技術の一手法ですか？", options: ["生成AI", "強化学習", "機械学習", "ルールベースAI"], answer: 2, explanation: "深層学習は機械学習の一手法であり、ニューラルネットワークを多層にした技術です。" },
                { id: "q101_4", type: "fill", question: "特化型AIの英語略称は？（アルファベット3文字）", answer: "ANI", explanation: "ANI = Artificial Narrow Intelligence（特化型人工知能）です。" }
            ]
        },
        {
            id: 102,
            title: "AIの歴史",
            duration: "15分",
            content: `
<h2>AIの歴史 ── 3度のブームと冬の時代</h2>
<p>AIの歴史は約70年にわたり、<strong>3度のブーム</strong>と<strong>2度の冬の時代</strong>を経て現在に至っています。</p>

<h2>AI発展の年表</h2>
<table>
<thead>
<tr><th>年代</th><th>時期</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td>1950年代</td><td>第1次AIブーム</td><td>チューリングテスト（1950年）、ダートマス会議で「AI」命名（1956年）、迷路やパズルを解くプログラム</td></tr>
<tr><td>1970年代</td><td>第1次冬の時代</td><td>単純な問題しか解けない現実、資金打ち切り</td></tr>
<tr><td>1980年代</td><td>第2次AIブーム</td><td>エキスパートシステム（ルールベース）、日本の第五世代コンピュータプロジェクト</td></tr>
<tr><td>1990年代</td><td>第2次冬の時代</td><td>知識の記述に限界（フレーム問題）、メンテナンスコストが膨大</td></tr>
<tr><td>2010年代</td><td>第3次AIブーム</td><td>ディープラーニングの登場（2012年〜）、画像認識がヒトを超える（2015年）、AlphaGoが囲碁世界王者に勝利（2016年）</td></tr>
<tr><td>2023年〜</td><td>生成AI革命</td><td>GPT-4、Claude、Geminiの登場。マルチモーダル化とAIエージェントの台頭</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 キーポイント</div>
各ブームに共通するのは、「技術的ブレークスルー」→「社会の期待過剰」→「限界の露呈」→「冬の時代」というサイクルです。第3次ブームの生成AI革命は、これまでのパターンとは異なり社会実装が急速に進んでいます。
</div>

<h2>第3次AIブームの転換点</h2>
<ul>
<li><strong>2012年</strong>：画像認識コンテストでディープラーニングが圧勝</li>
<li><strong>2016年</strong>：AlphaGoが囲碁の世界チャンピオンに勝利</li>
<li><strong>2020年</strong>：GPT-3が登場し、言語生成の可能性を示す</li>
<li><strong>2022年11月</strong>：ChatGPTの公開で生成AIが一般社会に浸透</li>
<li><strong>2023年〜</strong>：GPT-4、Claude、Geminiなど高性能モデルの競争が激化</li>
</ul>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "「AI」という名称が初めて使われた会議はどれですか？", options: ["チューリング会議", "ダートマス会議", "IEEE会議", "NeurIPS"], answer: 1, explanation: "1956年のダートマス会議で「AI（人工知能）」という用語が初めて命名されました。" },
                { id: "q102_2", type: "choice", question: "第2次AIブームの中心技術はどれですか？", options: ["ディープラーニング", "ニューラルネットワーク", "エキスパートシステム", "生成AI"], answer: 2, explanation: "第2次AIブームは「知識表現」の時代で、ルールベースのエキスパートシステムが中心でした。" },
                { id: "q102_3", type: "choice", question: "ChatGPTが公開されたのはいつですか？", options: ["2020年6月", "2021年11月", "2022年11月", "2023年3月"], answer: 2, explanation: "ChatGPTは2022年11月にOpenAIから公開され、生成AIブームの火付け役となりました。" }
            ]
        },
        {
            id: 103,
            title: "機械学習の3つのパラダイム",
            duration: "20分",
            content: `
<h2>機械学習とは</h2>
<p><strong>機械学習（Machine Learning）</strong>とは、明示的にプログラムしなくても、データからパターンを自動的に学習するAI技術です。機械学習には大きく3つのパラダイムがあります。</p>

<h2>3つの学習パラダイム</h2>
<table>
<thead>
<tr><th>種類</th><th>学習方法</th><th>使用データ</th><th>代表例</th></tr>
</thead>
<tbody>
<tr><td><strong>教師あり学習</strong></td><td>正解付きデータで学ぶ</td><td>入力＋正解のペア</td><td>スパムフィルタ、画像分類、売上予測</td></tr>
<tr><td><strong>教師なし学習</strong></td><td>データの構造を発見する</td><td>正解なしのデータ</td><td>顧客セグメント、トピック抽出</td></tr>
<tr><td><strong>強化学習</strong></td><td>試行錯誤で報酬を最大化</td><td>環境からの報酬</td><td>ゲームAI、ロボット制御、AlphaGo</td></tr>
</tbody>
</table>

<h3>教師あり学習の流れ</h3>
<ol>
<li><strong>訓練データの準備</strong>：入力と正解のペアを大量に用意</li>
<li><strong>モデルの学習</strong>：データのパターンを自動的に学習</li>
<li><strong>新データへの予測</strong>：学習したパターンで未知のデータを予測</li>
</ol>

<h3>教師なし学習の活用</h3>
<ul>
<li>顧客データから自動的にグループを発見（クラスタリング）</li>
<li>大量の文書からトピックを自動抽出</li>
<li>次元削減によるデータの可視化</li>
</ul>

<h3>強化学習のサイクル</h3>
<p>エージェントが<strong>行動</strong>→<strong>環境が変化</strong>→<strong>報酬を受け取る</strong>→<strong>行動を改善</strong>、というサイクルを繰り返し、「報酬が最大になる行動」を学びます。</p>

<h2>データの重要性 ── "Garbage In, Garbage Out"</h2>
<p>AIの性能を決める3要素は<strong>データ（燃料）</strong>、<strong>アルゴリズム（エンジン）</strong>、<strong>計算資源（馬力）</strong>です。中でもデータが最も重要で、「世界最高のアルゴリズムも、ゴミデータからはゴミしか生み出せない」と言われます。</p>

<div class="info-box warning">
<div class="info-box-title">⚠️ データの品質チェックリスト</div>
<ul>
<li>量は十分か？（少なすぎると学習不足）</li>
<li>質は高いか？（ノイズ、欠損、異常値）</li>
<li>バイアスはないか？（偏り、差別的データ）</li>
<li>最新か？（古いデータは現実を反映しない）</li>
<li>ラベルは正確か？（正解が間違っていたら終わり）</li>
</ul>
</div>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "スパムメールの分類に最も適した機械学習の種類はどれですか？", options: ["教師なし学習", "教師あり学習", "強化学習", "転移学習"], answer: 1, explanation: "スパム/正常のラベル（正解）付きデータで学習するため、教師あり学習が適しています。" },
                { id: "q103_2", type: "choice", question: "AlphaGoが囲碁を学習した主な手法はどれですか？", options: ["教師あり学習", "教師なし学習", "強化学習", "回帰分析"], answer: 2, explanation: "AlphaGoは自己対局を繰り返し、勝利という報酬を最大化する強化学習で学習しました。" },
                { id: "q103_3", type: "choice", question: "「Garbage In, Garbage Out」は何を意味していますか？", options: ["アルゴリズムが最も重要である", "計算資源が不足するとゴミが出る", "低品質なデータからは低品質な結果しか出ない", "AIは完璧ではないことを表す"], answer: 2, explanation: "どんなに優れたアルゴリズムも、低品質なデータからは低品質な結果しか出ないことを意味します。" },
                { id: "q103_4", type: "fill", question: "正解なしのデータからグループ分けを行う機械学習手法を何と呼びますか？（漢字で）", answer: "教師なし学習", explanation: "正解ラベルのないデータの構造を発見するのが教師なし学習です。" }
            ]
        }
    ]
};
