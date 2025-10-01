function InputPanel() {
    const navTabs = [
        { type: 'text', label: '文字信息', default: true },
        { type: 'voice', label: '语音' },
        { type: 'bunny', label: 'BUNNY' },
        { type: 'stickers', label: '表情包' }
    ];

    const subOptions = [
        { type: 'plain', label: '纯文本', default: true },
        { type: 'image', label: '图片' },
        { type: 'video', label: '视频' },
        { type: 'music', label: '音乐' },
        { type: 'post', label: '帖子' }
    ];

    return <div id='cip-input-panel' className='cip-frosted-glass'>
        <nav id="cip-panel-tabs">
            {
                navTabs.map(tab => {
                    const className = tab.default ? 'cip-tab-button active' : 'cip-tab-button';
                    return <button key={tab.type} class={className} data-tab={tab.type}>{tab.label}</button>;
                })
            }
        </nav>

        <div id="cip-format-display"></div>

        <div id="cip-panel-content">
            <div id="cip-text-content" class="cip-content-section">
                <div class="cip-sub-options-container">
                    {
                        subOptions.map((subOption) => {
                            const className = subOption.default ? 'cip-sub-option-btn active' : 'cip-sub-option-btn';
                            return <button key={subOption.type} class={className} data-type={subOption.type}>{subOption.label}</button>;
                        })
                    }
                </div>
                <div class="cip-main-input-wrapper">
                    <textarea id="cip-main-input" placeholder="在此输入文字..." />
                    <div id="cip-emoji-picker-btn" title="Emoji">😊</div>
                </div>
            </div>

            <div id="cip-voice-content" class="cip-content-section">
                <input type="number" id="cip-voice-duration" placeholder="输入时长 (秒, 仅数字)" />
                <textarea id="cip-voice-message" placeholder="输入语音识别出的内容..." />
            </div>

            <div id="cip-bunny-content" class="cip-content-section">
                <textarea id="cip-bunny-input" placeholder="在这里鞭策BUNNY吧..." />
            </div>

            <div id="cip-stickers-content" class="cip-content-section">
                <div id="cip-sticker-categories" class="cip-sub-options-container">
                    <button id="cip-add-category-btn" class="cip-sub-option-btn">+</button>
                </div>
                <div id="cip-sticker-grid"></div>
            </div>

            <div id="cip-panel-footer">
                <div id="cip-footer-controls">
                    <div id="cip-sync-button" title="同步设置">☁️</div>
                    <div id="cip-theme-button" title="主题设置">👕</div>
                    <div id="cip-alarm-button" title="定时指令">⏰</div>
                    <div id="cip-avatar-button" title="头像配置">🐰</div>
                    <input type="file" id="cip-import-settings-input" accept=".json" style="display: none;" />
                </div>
                <div class="cip-footer-actions">
                    <button id="cip-recall-button">撤回</button>
                    <button id="cip-insert-button">插入</button>
                </div>
            </div>
        </div>
    </div>;
}

export default InputPanel;