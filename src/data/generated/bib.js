const generatedBibEntries = {
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
    },
    "8628742": {
        "abstract": "Deep artificial neural networks require a large corpus of training data in order to effectively learn, where collection of such training data is often expensive and laborious.Data augmentationovercomes this issue by artificially inflating the training set with label preserving transformations. Recently there has been extensive use of generic data augmentation to improveConvolutional Neural Network(CNN) task performance. This study benchmarks various popular data augmentation schemes to allow researchers to make informed decisions as to which training methods are most appropriate for their data sets. Various geometric and photometric schemes are evaluated on a coarse-grained data set using a relatively simple CNN. Experimental results, run using 4-fold cross-validation and reported in terms of Top-1 and Top-5 accuracy, indicate that croppingin geometric augmentationsignificantly increases CNN task performance.",
        "author": "Taylor, Luke and Nitschke, Geoff",
        "booktitle": "2018 IEEE Symposium Series on Computational Intelligence (SSCI)",
        "doi": "10.1109/SSCI.2018.8628742",
        "keywords": "type: inproceedings, category: data_regularisation, data_augmentation, deep_learning",
        "publisher": "IEEE",
        "pages": "1542-1547",
        "title": "Improving Deep Learning with Generic Data Augmentation",
        "type": "inproceedings",
        "url": "https://ieeexplore.ieee.org/document/8628742",
        "year": "2018"
    },
    "pmlr-v95-takahashi18a": {
        "abstract": "Deep convolutional neural networks (CNNs) have demonstrated remarkable results in image recognition owing to their rich expression ability and numerous parameters. However, an excessive expression ability compared to the variety of training images often has a risk of overfitting. Data augmentation techniques have been proposed to address this problem as they enrich datasets by flipping, cropping, resizing, and color-translating images. They enable deep CNNs to achieve an impressive performance. In this study, we propose a new data augmentation technique called \emph{random image cropping and patching} (\emph{RICAP}), which randomly crops four images and patches them to construct a new training image. Hence, RICAP randomly picks up subsets of original features among the four images and discard others, enriching the variety of training images. Also, RICAP mixes the class labels of the four images and enjoys a benefit similar to label smoothing. We evaluated RICAP with current state-of-the-art CNNs (e.g., shake-shake regularization model) and achieved a new state-of-the-art test error of \textcolor{red}{2.23} on CIFAR-10 among competitive data augmentation techniques such as cutout and mixup. We also confirmed that deep CNNs with RICAP achieved better results on CIFAR-100 and ImageNet than those results obtained by other techniques.",
        "author": "Takahashi, Ryo and Matsubara, Takashi and Uehara, Kuniaki",
        "booktitle": "Proceedings of The 10th Asian Conference on Machine Learning",
        "doi": "10.48550/arXiv.1811.09030",
        "keywords": "type: inproceedings, category: data_regularisation, data_augmentation, deep_learning",
        "publisher": "PMLR",
        "pages": "786-798",
        "title": "Data Augmentation using Random Image Cropping and Patching for Deep CNNs",
        "type": "inproceedings",
        "url": "https://proceedings.mlr.press/v95/takahashi18a.html",
        "year": "2018"
    },
    "10.1145/3700439": {
        "abstract": "The field of deep learning has witnessed significant progress in recent times, particularly in areas such as computer vision (CV), natural language processing (NLP), and speech. The use of large-scale models trained on vast amounts of data holds immense promise for practical applications, enhancing industrial productivity and facilitating social development. However, it suffers extremely from the unstable training process and stringent requirements of computational resources. With the increasing demands on the adaption of computational capacity, though numerous studies have explored the efficient training field to a certain extent, a comprehensive summarization/guideline on those general acceleration techniques of training large-scale deep learning models is still much anticipated. In this survey, we present a detailed review of the general techniques for training acceleration. We consider the fundamental update formulation and split its basic components into five main perspectives: (1) “data-centric,” including dataset regularization, data sampling, and data-centric curriculum learning techniques, which can significantly reduce the computational complexity of the data samples; (2) “model-centric,” including acceleration of basic modules, compression training, model initialization, and model-centric curriculum learning techniques, which focus on accelerating the training via reducing the calculations on parameters and providing better initialization; (3) “optimization-centric,” including the selection of learning rate, the employment of large batch size, the designs of efficient objectives, and model average techniques, which pay attention to the training policy and improving the generality for the large-scale models; (4) “budgeted training,” including some distinctive acceleration methods on source-constrained situations, e.g., for limitation on the total iterations; and (5) “system-centric,” including some efficient distributed frameworks and open source libraries that provide adequate hardware support for the implementation of the above-mentioned acceleration algorithms. By presenting this comprehensive taxonomy, our survey presents a comprehensive review to understand the general mechanisms within each component and their joint interaction. Meanwhile, we further provide a detailed analysis and discussion of future works on the development of general acceleration techniques, which could inspire us to re-think and design novel efficient paradigms. Overall, we hope that this survey will serve as a valuable guideline for general efficient training",
        "author": "Shen, Li and Sun, Yan and Yu, Zhiyuan and Ding, Liang and Tian, Xinmei and Tao, Dacheng",
        "journal": "ACM Comput. Surv.",
        "doi": "10.1145/3700439",
        "keywords": "type: article, category: survey, data_sampling, data_regularisation, curriculum_learning, deep_learning",
        "publisher": "Association for Computing Machinery",
        "title": "On Efficient Training of Large-Scale Deep Learning Models",
        "url": "https://doi.org/10.1145/3700439",
        "year": "2024",
        "issn": "0360-0300",
        "volume": "57",
        "number": "3"
    },
    "10.1145/1553374.1553380": {
        "abstract": "Humans and animals learn much better when the examples are not randomly presented but organized in a meaningful order which illustrates gradually more concepts, and gradually more complex ones. Here, we formalize such training strategies in the context of machine learning, and call them "curriculum learning". In the context of recent research studying the difficulty of training in the presence of non-convex training criteria (for deep deterministic and stochastic neural networks), we explore curriculum learning in various set-ups. The experiments show that significant improvements in generalization can be achieved. We hypothesize that curriculum learning has both an effect on the speed of convergence of the training process to a minimum and, in the case of non-convex criteria, on the quality of the local minima obtained: curriculum learning can be seen as a particular form of continuation method (a general strategy for global optimization of non-convex functions).",
        "author": "Bengio, Yoshua and Louradour, Jerome and Collobert, Ronan and Weston, Jason",
        "booktitle": "Proceedings of the 26th Annual International Conference on Machine Learning",
        "doi": "10.1145/1553374.1553380",
        "isbn": "9781605585161",
        "keywords": "type: inproceedings, category: curriculum_learning, deep_learning",
        "publisher": "Association for Computing Machinery",
        "title": "Curriculum Learning", 
        "url": "https://doi.org/10.1145/1553374.1553380",
        "pages": "41-48",
        "year": "2009"
    }
};
