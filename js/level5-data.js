/* ============================================
   AI Academy - Level 5: AIのビジネス活用とエージェント
   ============================================ */

const LEVEL5_DATA = {
    id: 5,
    title: "AIのビジネス活用とエージェント",
    icon: "💼",
    description: "業務領域別の活用・AI導入の成功パターン・AIエージェントの理解",
    modules: [
        {
            id: 501,
            title: "業務領域別の活用マップ",
            duration: "20分",
            content: `
<h2>業務領域別AI活用マップ</h2>
<p>AIはさまざまな業務領域で活用できます。導入難易度を考慮しながら、効果的な活用例を見ていきましょう。</p>

<table>
<thead>
<tr><th>業務領域</th><th>AI活用例</th><th>導入難易度</th></tr>
</thead>
<tbody>
<tr><td rowspan="3"><strong>マーケティング</strong></td><td>コンテンツ生成</td><td>低</td></tr>
<tr><td>顧客セグメント分析</td><td>中</td></tr>
<tr><td>パーソナライズ推薦</td><td>高</td></tr>
<tr><td rowspan="3"><strong>営業</strong></td><td>商談議事録の自動要約</td><td>低</td></tr>
<tr><td>提案書の下書き生成</td><td>低</td></tr>
<tr><td>受注予測</td><td>高</td></tr>
<tr><td rowspan="3"><strong>カスタマーサポート</strong></td><td>チャットボット</td><td>中</td></tr>
<tr><td>FAQ自動生成</td><td>低</td></tr>
<tr><td>感情分析</td><td>中</td></tr>
<tr><td rowspan="3"><strong>経理・財務</strong></td><td>請求書の自動読取</td><td>中</td></tr>
<tr><td>異常検知</td><td>高</td></tr>
<tr><td>レポート自動生成</td><td>低</td></tr>
<tr><td rowspan="3"><strong>開発・IT</strong></td><td>コード生成・補完</td><td>低</td></tr>
<tr><td>テスト自動生成</td><td>中</td></tr>
<tr><td>レガシーコード解析</td><td>中</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 導入のコツ</div>
AI導入は「導入難易度：低」のタスクから始めるのが成功の鍵です。コンテンツ生成、提案書の下書き、FAQ作成など、すぐに効果が実感でき、リスクも低いタスクから着手しましょう。
</div>

<h2>ROIの考え方</h2>
<h3>AI導入の効果</h3>
<ul>
<li><strong>時間削減効果</strong>：削減時間 x 時間単価 x 対象人数 x 12ヶ月</li>
<li><strong>品質向上効果</strong>：エラー率の低下 x エラー1件あたりのコスト</li>
<li><strong>売上増加効果</strong>：対応速度向上による受注増、顧客満足度向上</li>
<li><strong>機会費用の回収</strong>：空いた時間で高付加価値業務に取り組める</li>
</ul>

<h3>AI導入のコスト</h3>
<ul>
<li>ツール費用（ライセンス/API）</li>
<li>導入・カスタマイズ費用</li>
<li>教育・研修費用</li>
<li>運用・保守費用</li>
<li>データ整備費用</li>
</ul>

<p><strong>ROI = （効果 - コスト） / コスト x 100%</strong></p>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "AI導入で最初に着手すべきタスクの特徴はどれですか？", options: ["導入難易度が高く、効果も高い", "導入難易度が低く、すぐ効果が実感できる", "最もコストが高い", "経営判断が必要なタスク"], answer: 1, explanation: "導入難易度が低く、すぐに効果が実感できるタスクから始めるのが成功の鍵です。" },
                { id: "q501_2", type: "choice", question: "AI導入のROI計算式として正しいものはどれですか？", options: ["効果 x コスト x 100%", "（効果 - コスト） / コスト x 100%", "コスト / 効果 x 100%", "効果 + コスト / 100"], answer: 1, explanation: "ROI =（効果 - コスト）/ コスト x 100% がAI導入のROI計算式です。" },
                { id: "q501_3", type: "choice", question: "以下のうち、導入難易度が「低」に分類されるAI活用例はどれですか？", options: ["受注予測", "異常検知", "パーソナライズ推薦", "提案書の下書き生成"], answer: 3, explanation: "提案書の下書き生成は導入難易度が低く、生成AIですぐに始められるタスクです。" }
            ]
        },
        {
            id: 502,
            title: "AI導入の成功パターン",
            duration: "15分",
            content: `
<h2>AI導入の5フェーズ</h2>
<p>AI導入は段階的に進めることが成功の鍵です。以下の5フェーズを順番に踏みましょう。</p>

<table>
<thead>
<tr><th>フェーズ</th><th>期間</th><th>内容</th><th>ポイント</th></tr>
</thead>
<tbody>
<tr><td><strong>Phase 1：個人利用</strong></td><td>0〜1ヶ月</td><td>まず自分で使ってみる。ChatGPT/Claude等の無料〜有料プラン</td><td>ここを飛ばすと組織導入は100%失敗する</td></tr>
<tr><td><strong>Phase 2：チーム試行</strong></td><td>1〜3ヶ月</td><td>特定チームでパイロット運用。ユースケース発見と共有</td><td>効果測定の仕組みづくり</td></tr>
<tr><td><strong>Phase 3：ルール整備</strong></td><td>2〜4ヶ月</td><td>AI利用ポリシー策定。セキュリティ・コンプライアンス整備</td><td>機密情報の取り扱いルール</td></tr>
<tr><td><strong>Phase 4：全社展開</strong></td><td>3〜6ヶ月</td><td>全部門への段階的ロールアウト。AIチャンピオンの育成</td><td>効果の定量的な測定</td></tr>
<tr><td><strong>Phase 5：業務変革</strong></td><td>6ヶ月〜</td><td>業務プロセス自体の再設計。AIネイティブなワークフロー構築</td><td>新たなビジネスモデルの創出</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 最大の失敗パターン</div>
Phase 1（個人利用）を飛ばして、いきなり組織導入しようとするのが最も多い失敗パターンです。AIの可能性と限界を体感していない状態で導入を進めても、適切な判断ができません。まずは自分で使ってみることが全ての出発点です。
</div>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "AI導入の5フェーズのうち、最初に行うべきフェーズはどれですか？", options: ["ルール整備", "個人利用", "全社展開", "チーム試行"], answer: 1, explanation: "Phase 1「個人利用」が最初のフェーズです。まず自分で使ってみることが全ての出発点です。" },
                { id: "q502_2", type: "choice", question: "AI導入の最大の失敗パターンはどれですか？", options: ["個人利用から始めること", "個人利用を飛ばしていきなり組織導入すること", "ルールを策定すること", "段階的に展開すること"], answer: 1, explanation: "Phase 1（個人利用）を飛ばしていきなり組織導入しようとするのが最大の失敗パターンです。" },
                { id: "q502_3", type: "choice", question: "Phase 3「ルール整備」で策定すべきものはどれですか？", options: ["AIモデルの開発計画", "AI利用ポリシーとセキュリティ・コンプライアンス", "AIの学習データ", "AIのハードウェア仕様"], answer: 1, explanation: "Phase 3ではAI利用ポリシーの策定とセキュリティ・コンプライアンスの整備を行います。" }
            ]
        },
        {
            id: 503,
            title: "AIエージェントとは",
            duration: "20分",
            content: `
<h2>AIエージェント ── 次のパラダイム</h2>
<p>AIの進化は「チャットボット型」から「エージェント型」へと移行しつつあります。</p>

<h3>従来のAI（チャットボット）</h3>
<p>人間：質問 → AI：回答 → 人間：次の質問 → ...（1問1答。人間が常に主導）</p>

<h3>AIエージェント</h3>
<ol>
<li>人間が<strong>目標を指示</strong></li>
<li>AIが目標を分解し、<strong>計画を立てる</strong></li>
<li>AIが<strong>ツールを使って実行</strong>（Web検索、コード実行、API呼び出し等）</li>
<li>AIが結果を評価し、<strong>必要なら計画を修正</strong></li>
<li>AIが<strong>完了報告</strong></li>
</ol>

<div class="info-box tip">
<div class="info-box-title">💡 エージェントの核心</div>
人間は「何を」だけ指示し、「どうやって」はAIに任せる。「考える」→「行動する」→「観察する」→「考える」のループを自律的に回せることがエージェントの核心です。
</div>

<h2>エージェントの構成要素</h2>
<table>
<thead>
<tr><th>構成要素</th><th>役割</th><th>具体例</th></tr>
</thead>
<tbody>
<tr><td><strong>LLM（脳）</strong></td><td>推論・計画の中心</td><td>GPT-4o、Claude等</td></tr>
<tr><td><strong>メモリ</strong></td><td>情報の保持</td><td>短期記憶、長期記憶、作業記憶</td></tr>
<tr><td><strong>ツール</strong></td><td>外部との連携</td><td>Web検索、コード実行、API呼び出し、ファイル操作</td></tr>
<tr><td><strong>計画</strong></td><td>目標達成の戦略</td><td>目標分解、ステップ管理、自己評価、軌道修正</td></tr>
</tbody>
</table>

<h2>マルチエージェントシステム</h2>
<p>複数の専門化したAIエージェントが協力してタスクを遂行する仕組みです。</p>
<ul>
<li><strong>リサーチエージェント</strong>：情報を収集する</li>
<li><strong>ライティングエージェント</strong>：文章を書く</li>
<li><strong>レビューエージェント</strong>：品質をチェックする</li>
</ul>
<p>一つのLLMにすべてをやらせるのではなく、人間の組織と同じように<strong>「役割分担」</strong>することで、より高品質なアウトプットを実現します。</p>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "AIエージェントと従来のチャットボットの最大の違いはどれですか？", options: ["回答速度が速い", "自律的に複数ステップのタスクを実行できる", "日本語が上手い", "画像を生成できる"], answer: 1, explanation: "AIエージェントは目標を分解し、計画を立て、ツールを使って自律的に複数ステップのタスクを実行できます。" },
                { id: "q503_2", type: "choice", question: "AIエージェントの構成要素に含まれないものはどれですか？", options: ["LLM（脳）", "メモリ", "物理的なロボット", "ツール"], answer: 2, explanation: "AIエージェントの構成要素はLLM、メモリ、ツール、計画の4つです。物理的なロボットは含まれません。" },
                { id: "q503_3", type: "choice", question: "マルチエージェントシステムの基本コンセプトはどれですか？", options: ["一つのAIに全てを任せる", "専門化したエージェント同士が役割分担して協力する", "人間がAIの代わりに作業する", "AIを使わないシステム"], answer: 1, explanation: "マルチエージェントシステムは、専門化したエージェント同士が人間の組織のように役割分担して協力する仕組みです。" }
            ]
        }
    ]
};
