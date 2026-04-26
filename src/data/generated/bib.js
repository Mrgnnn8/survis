const generatedBibEntries = {
    "Beck2016Visual": {
        "abstract": "Bibiographic data such as collections of scientific articles and citation networks have been studied extensively in information visualization and visual analytics research. Powerful systems have been built to support various types of bibliographic analysis, but they require some training and cannot be used to disseminate the insights gained. In contrast, we focused on developing a more accessible visual analytics system, called SurVis, that is ready to disseminate a carefully surveyed literature collection.",
        "author": "Beck, Fabian and Koch, Sebastian and Weiskopf, Daniel",
        "doi": "10.1109/TVCG.2015.2467757",
        "journal": "IEEE Transactions on Visualization and Computer Graphics",
        "keywords": "type:system, visual_analytics, sparklines, information_retrieval, clustering, literature_browser",
        "number": "01",
        "publisher": "IEEE",
        "series": "TVCG",
        "title": "Visual Analysis and Dissemination of Scientific Literature Collections with {SurVis}",
        "type": "article",
        "url": "http://www.visus.uni-stuttgart.de/uploads/tx_vispublications/vast15-survis.pdf",
        "volume": "22",
        "year": "2016"
    },
    "sathiyanarayanan2025progressive": {
        "abstract": "The success of the machine learning field has reliably depended on training on large datasets. While effective, this trend comes at an extraordinary cost. The proposed Progressive Data Dropout reduces the number of effective epochs to as little as 12.4% of the baseline without any cost to accuracy, and surprisingly improves accuracy by up to 4.82%.",
        "author": "Sathiyanarayanan, Shriram M and Hao, Xinyue and Hou, Shihao and Lu, Yang and Sevilla-Lara, Laura and Arnab, Anurag and Gowda, Shreyank N",
        "doi": "10.48550/arXiv.2505.22342",
        "keywords": "type:misc, category:data_sampling, data_dropout, deep_learning",
        "publisher": "arXiv",
        "title": "Progressive Data Dropout: An Embarrassingly Simple Approach to Faster Training",
        "type": "misc",
        "url": "https://arxiv.org/abs/2505.22342",
        "year": "2025"
    },
    "paul2021deeplearning": {
        "abstract": "Recent success in deep learning has partially been driven by training increasingly overparametrized networks on ever larger datasets. This work proposes GraNd and EL2N scores to identify important training examples early in training, enabling pruning of significant fractions of training data without sacrificing test accuracy.",
        "author": "Paul, Mansheej and Ganguli, Surya and Dziugaite, Gintare Karolina",
        "booktitle": "Advances in Neural Information Processing Systems (NeurIPS)",
        "doi": "10.48550/arXiv.2107.07075",
        "keywords": "type:inproceedings, category:data_sampling, data_pruning, deep_learning",
        "title": "Deep Learning on a Data Diet: Finding Important Examples Early in Training",
        "type": "inproceedings",
        "url": "https://arxiv.org/abs/2107.07075",
        "year": "2021"
    },
    "qin2023infobatchlosslesstrainingspeed": {
        "abstract": "Data pruning aims to obtain lossless performances with less overall cost. A common approach is to filter out samples that make less contribution to the training. This could lead to gradient expectation bias compared to the original data. To solve this problem, we propose \textbf{InfoBatch}, a novel framework aiming to achieve lossless training acceleration by unbiased dynamic data pruning. Specifically, InfoBatch randomly prunes a portion of less informative samples based on the loss distribution and rescales the gradients of the remaining samples to approximate the original gradient. As a plug-and-play and architecture-agnostic framework, InfoBatch consistently obtains lossless training results on classification, semantic segmentation, vision pertaining, and instruction fine-tuning tasks. On CIFAR10/100, ImageNet-1K, and ADE20K, InfoBatch losslessly saves 40\% overall cost. For pertaining MAE and diffusion model, InfoBatch can respectively save 24.8\% and 27\% cost. For LLaMA instruction fine-tuning, InfoBatch is also able to save 20\% cost and is compatible with coreset selection methods. ",
        "author": "Ziheng Qin and Kai Wang and Zangwei Zheng and Jianyang Gu and Xiangyu Peng and Zhaopan Xu and Daquan Zhou and Lei Shang and Baigui Sun and Xuansong Xie and Yang You",
        "doi" : "10.48550/arXiv.2303.04947",
        "keywords": "type:misc, category:data_sampling, data_pruning, deep_learning",
        "publisher": "arxiv",
        "title": "InfoBatch: Lossless Training Speed Up by Unbiased Dynamic Data Pruning",
        "type": "misc",
        "url": "https://arxiv.org/abs/2303.04947",
        "year": "2023"
        
    },
    "toneva2019empiricalstudyexampleforgetting": {
        "abstract": "Inspired by the phenomenon of catastrophic forgetting, we investigate the learning dynamics of neural networks as they train on single classification tasks. Our goal is to understand whether a related phenomenon occurs when data does not undergo a clear distributional shift. We define a `forgetting event' to have occurred when an individual training example transitions from being classified correctly to incorrectly over the course of learning. Across several benchmark data sets, we find that: (i) certain examples are forgotten with high frequency, and some not at all; (ii) a data set's (un)forgettable examples generalize across neural architectures; and (iii) based on forgetting dynamics, a significant fraction of examples can be omitted from the training data set while still maintaining state-of-the-art generalization performance.",
        "author": "Mariya Toneva and Alessandro Sordoni and Remi Tachet des Combes and Adam Trischler and Yoshua Bengio and Geoffrey J. Gordon",
        "booktitle": "International Conference on Learning Representation",
        "doi": "10.48550/arXiv.1812.05159",
        "keywords": "type:inproceedings, category:data_sampling, data_pruning, deep_learning",
        "publisher": "arxiv",
        "title": "An Empirical Study of Example Forgetting during Deep Neural Network Learning",
        "type": "inproceedings",
        "url": "https://arxiv.org/abs/1812.05159?context=stat.ML",
        "year": "2019"
    },
    "pmlr-v119-mirzasoleiman20a": {
        "abstract": "Incremental gradient (IG) methods, such as stochastic gradient descent and its variants are commonly used for large scale optimization in machine learning. Despite the sustained effort to make IG methods more data-efficient, it remains an open question how to select a training data subset that can theoretically and practically perform on par with the full dataset. Here we develop CRAIG, a method to select a weighted subset (or coreset) of training data that closely estimates the full gradient by maximizing a submodular function. We prove that applying IG to this subset is guaranteed to converge to the (near)optimal solution with the same convergence rate as that of IG for convex optimization. As a result, CRAIG achieves a speedup that is inversely proportional to the size of the subset. To our knowledge, this is the first rigorous method for data-efficient training of general machine learning models. Our extensive set of experiments show that CRAIG, while achieving practically the same solution, speeds up various IG methods by up to 6x for logistic regression and 3x for training deep neural networks.",
        "author": "Mirzasoleiman, Baharan and Bilmes, Jeff and Leskovec, Jure",
        "booktitle": "Proceedings of the 37th International Conference on Machine Learning",
        "doi": "10.48550/arXiv.1906.01827",
        "keywords": "type:inproceedings, category:data_sampling, data_pruning, deep_learning",
        "publisher": "PMLR",
        "title": "Coresets for Data-efficient Training of Machine Learning Models",
        "type": "inproceedings",
        "url": "https://proceedings.mlr.press/v119/mirzasoleiman20a",
        "year": "2020"
    }    
};
