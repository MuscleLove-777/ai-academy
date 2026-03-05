/* ============================================
   AI Academy - Level 2: 深層学習とLLM
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "深層学習とLLM",
    icon: "🧠",
    description: "ニューラルネットワーク・主要アーキテクチャ・大規模言語モデルの仕組み",
    modules: [
        {
            id: 201,
            title: "ニューラルネットワークの基本",
            duration: "15分",
            content: `
<h2>ニューラルネットワークとは</h2>
<p><strong>ニューラルネットワーク</strong>は、生物の神経細胞（ニューロン）の仕組みを模倣した数学的モデルです。人工ニューロンが多数接続されたネットワーク構造で、データから複雑なパターンを学習します。</p>

<h2>生物のニューロンとの対比</h2>
<table>
<thead>
<tr><th>生物の神経細胞</th><th>役割</th><th>人工ニューロン</th></tr>
</thead>
<tbody>
<tr><td>樹状突起</td><td>入力</td><td>入力 x 重み</td></tr>
<tr><td>細胞体</td><td>処理</td><td>合計を計算 → 活性化関数</td></tr>
<tr><td>軸索</td><td>出力</td><td>出力値</td></tr>
</tbody>
</table>

<h2>ネットワークの構造</h2>
<p>ニューラルネットワークは以下の層で構成されます。</p>
<ul>
<li><strong>入力層</strong>：データを受け取る層</li>
<li><strong>隠れ層</strong>：データを変換・処理する中間層（複数可）</li>
<li><strong>出力層</strong>：最終的な結果を出力する層</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">💡 「深層」の意味</div>
「深層学習」の「深層」とは、隠れ層が深い（多い）ことを意味します。層が深いほど複雑な特徴を階層的に学習できます。学習とは各接続の「重み」を最適化することであり、データを入力し、誤差を逆伝播して重みを更新する処理を何百万〜何十億回繰り返します。
</div>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "ニューラルネットワークにおいて「学習」とは何を行うことですか？", options: ["データを入力すること", "各接続の重みを最適化すること", "隠れ層の数を増やすこと", "出力を人間が確認すること"], answer: 1, explanation: "学習とは、各接続の「重み」を最適化するプロセスです。誤差を逆伝播して重みを更新します。" },
                { id: "q201_2", type: "choice", question: "「深層学習」の「深層」は何を指していますか？", options: ["データの深さ", "隠れ層の数が多いこと", "学習回数が多いこと", "理解の深さ"], answer: 1, explanation: "「深層」は隠れ層が深い（多い）ことを意味し、層が深いほど複雑な特徴を学習できます。" },
                { id: "q201_3", type: "choice", question: "人工ニューロンで「樹状突起」に対応する処理はどれですか？", options: ["出力値の送信", "入力に重みをかける", "活性化関数の適用", "誤差の逆伝播"], answer: 1, explanation: "樹状突起は入力を受け取る部分で、人工ニューロンでは入力に重みをかける処理に対応します。" }
            ]
        },
        {
            id: 202,
            title: "主要なアーキテクチャ",
            duration: "15分",
            content: `
<h2>深層学習の主要アーキテクチャ</h2>
<p>深層学習にはさまざまなネットワーク構造（アーキテクチャ）があり、それぞれ得意なタスクが異なります。</p>

<table>
<thead>
<tr><th>アーキテクチャ</th><th>得意なこと</th><th>代表的な応用</th></tr>
</thead>
<tbody>
<tr><td><strong>CNN（畳み込みNN）</strong></td><td>画像の認識、空間的なパターン</td><td>顔認証、自動運転、医療画像診断</td></tr>
<tr><td><strong>RNN/LSTM（再帰型NN）</strong></td><td>時系列データ、前後の文脈理解</td><td>音声認識、翻訳（Transformerに置き換えられつつある）</td></tr>
<tr><td><strong>Transformer</strong></td><td>言語理解・生成、長距離の依存関係、並列処理</td><td>GPT、Claude、Gemini、BERT（現在の主流）</td></tr>
<tr><td><strong>Diffusion Model</strong></td><td>画像・動画生成、ノイズから復元</td><td>Stable Diffusion、DALL-E、Midjourney</td></tr>
<tr><td><strong>GAN（敵対的生成NN）</strong></td><td>画像生成、リアルなデータ生成</td><td>StyleGAN（顔生成）、DeepFake</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 Transformerの革命</div>
2017年にGoogleが発表したTransformerアーキテクチャは、「Attention（注意機構）」を活用して入力データの関係性を効率的に捉えます。並列処理が可能で大規模化しやすく、現在のLLM（GPT、Claude、Gemini等）の基盤技術となっています。
</div>

<h2>アーキテクチャの選び方</h2>
<ul>
<li><strong>画像認識・分類</strong> → CNN</li>
<li><strong>テキスト生成・理解</strong> → Transformer</li>
<li><strong>画像生成</strong> → Diffusion Model / GAN</li>
<li><strong>時系列予測</strong> → RNN/LSTM（またはTransformer）</li>
</ul>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "現在のLLM（GPT、Claude等）の基盤となっているアーキテクチャはどれですか？", options: ["CNN", "RNN/LSTM", "Transformer", "GAN"], answer: 2, explanation: "Transformerアーキテクチャが現在のLLMの基盤技術です。" },
                { id: "q202_2", type: "choice", question: "Stable DiffusionやDALL-Eが使用しているアーキテクチャはどれですか？", options: ["CNN", "Transformer", "GAN", "Diffusion Model"], answer: 3, explanation: "Stable DiffusionやDALL-Eはノイズから画像を復元するDiffusion Modelを使用しています。" },
                { id: "q202_3", type: "choice", question: "顔認証や自動運転の画像処理に主に使われるアーキテクチャはどれですか？", options: ["CNN", "RNN", "GAN", "Transformer"], answer: 0, explanation: "CNN（畳み込みニューラルネットワーク）は画像認識・空間的パターンの認識に強く、顔認証や自動運転に使われます。" }
            ]
        },
        {
            id: 203,
            title: "LLMの仕組みと学習プロセス",
            duration: "20分",
            content: `
<h2>LLMはどうやって文章を生成するのか</h2>
<p><strong>LLM（Large Language Model）</strong>の基本原理は<strong>「次の単語予測」</strong>です。入力されたテキストに対して、次に来る可能性が最も高い単語を統計的に予測し、それを繰り返すことで文章を生成します。</p>

<h3>次の単語予測の例</h3>
<p>入力：「今日の天気は」</p>
<table>
<thead>
<tr><th>候補</th><th>確率</th></tr>
</thead>
<tbody>
<tr><td>「晴れ」</td><td>35%</td></tr>
<tr><td>「曇り」</td><td>20%</td></tr>
<tr><td>「雨」</td><td>15%</td></tr>
<tr><td>「良い」</td><td>12%</td></tr>
<tr><td>その他</td><td>18%</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 重要な理解</div>
LLMは「意味を理解して」書いているのではなく、「統計的に最もありそうな次の単語」を予測しています。しかしその予測が驚くほど知的に見えるため、「本当に理解しているのか？」という論争を生んでいます。
</div>

<h2>LLMの学習プロセス ── 3ステップ</h2>

<h3>Step 1：事前学習（Pre-training）</h3>
<ul>
<li>インターネット上の大量テキスト（数兆トークン）で学習</li>
<li>「次の単語を予測する」タスクをひたすら繰り返す</li>
<li>数千〜数万のGPUで数ヶ月間、コストは数億〜数百億円</li>
</ul>

<h3>Step 2：指示チューニング（Instruction Tuning）</h3>
<ul>
<li>人間が書いた「質問→回答」のペアで追加学習</li>
<li>「指示に従う」能力を獲得（数万〜数十万の高品質データ）</li>
</ul>

<h3>Step 3：RLHF（人間のフィードバックによる強化学習）</h3>
<ul>
<li>モデルの回答を人間が評価（良い/悪い）</li>
<li>「人間が好む回答」を生成するよう強化学習</li>
<li>安全性・有用性・正直さを向上</li>
</ul>

<h2>主要LLMの比較</h2>
<table>
<thead>
<tr><th>モデル</th><th>開発元</th><th>特徴</th><th>公開形態</th></tr>
</thead>
<tbody>
<tr><td><strong>GPT-4o / GPT-4.5</strong></td><td>OpenAI</td><td>総合力が高い、マルチモーダル</td><td>クローズド</td></tr>
<tr><td><strong>Claude (Opus/Sonnet)</strong></td><td>Anthropic</td><td>長文理解、安全性重視、コーディング</td><td>クローズド</td></tr>
<tr><td><strong>Gemini</strong></td><td>Google</td><td>Google連携、長コンテキスト</td><td>クローズド</td></tr>
<tr><td><strong>Llama 3</strong></td><td>Meta</td><td>オープンソース、カスタマイズ性</td><td>オープン</td></tr>
<tr><td><strong>Mistral / Mixtral</strong></td><td>Mistral AI</td><td>軽量で高性能、欧州発</td><td>オープン</td></tr>
<tr><td><strong>DeepSeek</strong></td><td>DeepSeek</td><td>低コスト開発、中国発</td><td>オープン</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "LLMが文章を生成する基本原理はどれですか？", options: ["意味を理解して文章を組み立てる", "テンプレートから文章を選ぶ", "次の単語の確率を統計的に予測する", "データベースから文章を検索する"], answer: 2, explanation: "LLMの基本原理は「次の単語予測」です。統計的に最もありそうな次の単語を予測し続けることで文章を生成します。" },
                { id: "q203_2", type: "choice", question: "LLMの学習プロセスにおいて、「人間のフィードバックによる強化学習」の略称はどれですか？", options: ["BERT", "RLHF", "RAG", "NLP"], answer: 1, explanation: "RLHF（Reinforcement Learning from Human Feedback）は人間の評価を使ってモデルを改善する手法です。" },
                { id: "q203_3", type: "choice", question: "LLMの事前学習で使われるデータ量の規模として最も近いものはどれですか？", options: ["数千トークン", "数百万トークン", "数十億トークン", "数兆トークン"], answer: 3, explanation: "最新のLLMは数兆トークンという膨大なテキストデータで事前学習を行います。" },
                { id: "q203_4", type: "fill", question: "LLMの略称は何の頭文字ですか？（英語正式名称を答えてください）", answer: "Large Language Model", explanation: "LLM = Large Language Model（大規模言語モデル）です。" }
            ]
        }
    ]
};
